import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { BehaviorSubject, map, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  listUsersSearch = [
    {
      name: 'Dylan Marrento',
      passaporte: '11',
      idade: '50',
      patente: 'Aluno',
      unidade: 'CORE',
      tel: '242-424',
      emprego: 'POLICIA',
      rg: '2d5888cvasf',
      ficha: 'Suja'
    },
    {
      name: 'Fernando coxta',
      passaporte: '12',
      idade: '60',
      patente: 'Capitão',
      unidade: 'Sem unidade',
      tel: '242-555',
      emprego: 'POLICIA',
      rg: '2d5dffsdcsdsf',
      ficha: 'Suja'
    },
    {
      name: 'Pedro Perreira',
      passaporte: '15',
      idade: '22',
      patente: 'Soldado',
      unidade: 'Sem unidade',
      tel: '242-555',
      emprego: 'POLICIA',
      rg: '2d588a541xc56sf',
      ficha: 'Suja'
    }
  ]

  private searchPlayerObject: BehaviorSubject<any>
  private currentUser: BehaviorSubject<any>

  constructor(
    private httpClient: HttpClient
  ) {
    this.searchPlayerObject = new BehaviorSubject(null)
    this.currentUser = new BehaviorSubject(null)
  }

  searchPlayer(pass: string | number)  {
    if (!this.searchPlayerObject.getValue()) {
      this.findPlayer(+pass)
    }
    return this.searchPlayerObject.pipe(map( user => user ));
  }

  getCurrentUser() {
    return this.currentUser.getValue();
  }

  getPermission(permission: string) {
    return (this.currentUser.getValue()).permission.includes(permission);
  }

  getSearchUser() {
    return this.searchPlayerObject.pipe(
      map(user => user)
    )
  }

  findPlayer(pass: number) {
    if (!environment.production) {
      const testUser = (this.listUsersSearch.find((user: any) => user.passaporte+'' == pass+'')) as any
      this.searchPlayerObject.next(testUser)
      return this.searchPlayerObject.pipe(map(x => x))
    } else {
      return this.httpClient.post(`http://${environment.tabletName}/findplayer`, {pass}).pipe(
        map(player => {
          this.searchPlayerObject.next(player);
          return player
        })
      )
    }

  }

  login(pass: number) {
    if (!environment.production) {
      return of(true);
    } else if (environment.production) {
      return this.httpClient.post(`http://${environment.tabletName}/login`, {pass}).pipe(
        map(resp => resp)
      )
    }
    return of(false)
  }

  verifyLoged() {
    return this.currentUser.pipe(
      map(user => { return user? true : false })
    )
  }


}
