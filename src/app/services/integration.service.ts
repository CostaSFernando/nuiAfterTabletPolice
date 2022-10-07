import { BehaviorSubject, map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IntegrationService {

  private statusTablet: BehaviorSubject<boolean>

  constructor() {
    this.statusTablet = new BehaviorSubject(false);
  }

  /**
   *
   * @returns Observable<boolean>
   */
  getStatusTablet(): Observable<boolean> {
    return this.statusTablet.pipe(
      map( status => status));
  }
  /**
   * Open or close tablet
   */
  openOrCloseTablet(possibleStatus?: boolean) {
    this.statusTablet.next(possibleStatus != undefined ? possibleStatus : !this.statusTablet.getValue());
  }

  prender({tempo, servicos, multa, passaporte}: {tempo: number, servicos: number, multa: number, passaporte: number}) {

  }

}
