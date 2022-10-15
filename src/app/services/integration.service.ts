import { Iacao } from './../share/model/acao.interface';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IntegrationService {

  private statusTablet: BehaviorSubject<boolean>

  private listActions: BehaviorSubject<Iacao[]>

  constructor(
    private httpClient: HttpClient
  ) {
    this.statusTablet = new BehaviorSubject(false);
    this.listActions = new BehaviorSubject([{} as Iacao]);
  }

  messageObservable({data}: any) {
    switch (data.typeAction) {
      case 'listActions':
        this.reactiveUpdateListActions(data)
        break;

      default:
        break;
    }
  }

  finishAction(action: {
    id: number,
    win: boolean,
    policiais: {
      nome: string,
      id: number
    }[]
  }) {
    console.log(action.win);

    return this.httpClient.post(`http://${environment.tabletName}/updateAction`, action).pipe(
      map(resp => {
        return resp
      })
    );
  }

  getListActions() {
    return this.httpClient.get<{data: Iacao[]}>(`http://${environment.tabletName}/listActions`).pipe(
      map(resp => {
        return resp.data
      })
    )
  }

  listPoliceOn() {
    return this.httpClient.get<{data: {id: number, passaporte: number, nome: string}[]}>(`http://${environment.tabletName}/onPolices`).pipe(
      map(resp => {
        return resp.data
      })
    );
  }

  private set setListActions(array: Iacao[]) {
    this.listActions.next(array);
  }

  private reactiveUpdateListActions(data: any) {
    const actions = data.listActions as Iacao[]
    this.setListActions = actions
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

  prender({motivo, servicos, multa, passaporte}: {servicos: number, multa: number, passaporte: number, motivo: string}) {

    let prisonPlayerPass, services, fine, reason;
    prisonPlayerPass = passaporte;
    services = servicos
    fine = multa
    reason = motivo

    return this.httpClient.post(`http://${environment.tabletName}/prisonPlayer`, {services, fine, prisonPlayerPass, reason}).pipe(
      map(result => console.log(result))
    )
  }

  getPenalCode() {
    return this.httpClient.get(`http://${environment.tabletName}/getPenalCode`).pipe(
      map(penalCode => {
        return penalCode
      })
    );
  }

  setFine({passaporte, multa, motivo}: any) {
    const fine = multa;
    const playerPass = passaporte;
    const reason = motivo

    return this.httpClient.post(`http://${environment.tabletName}/finePlayer`, {playerPass, fine, reason}).pipe(
      map(fine => {
        return fine
      })
    );
  }

  closeTablet() {
    return this.httpClient.post(`http://${environment.tabletName}/closePoliceTablet`, {}).pipe(
      map(close => {
        if (close) {
          this.openOrCloseTablet(false);
        }
      })
    );
  }

}
