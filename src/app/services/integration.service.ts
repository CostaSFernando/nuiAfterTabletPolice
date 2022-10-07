import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IntegrationService {

  private statusTablet: BehaviorSubject<boolean>

  constructor(
    private httpClient: HttpClient
  ) {
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

  getPenalCode() {
    return this.httpClient.get(`http://${environment.tabletName}/getPenalCode`).pipe(
      map(penalCode => {
        return penalCode
      })
    );
  }

}
