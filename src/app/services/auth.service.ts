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

  private user: BehaviorSubject<any>
  private currentUser: BehaviorSubject<any>

  constructor() {
    this.user = new BehaviorSubject(null)
    this.currentUser = new BehaviorSubject(null)
  }

  searchUser(pass: string | number)  {
    const testUser = (this.listUsersSearch.find((user: any) => user.passaporte+'' == pass)) as any
    this.user.next(testUser)

    return this.user.pipe(map(user => {
      return user
    }));
  }

  getCurrentUser() {
    return this.currentUser.getValue();
  }

  getSearchUser() {
    return this.user.pipe(map( user => user));
  }

  getPermission(permission: string) {
    return (this.currentUser.getValue()).permission.includes(permission);
  }

  findUser(pass: number) {

    return this.user.pipe(
      map(user => {
        if (pass === 11) {
          return user;
        }
        return undefined;
      })
    );
  }

  login(pass: number) {
    if (pass === 576) {

      this.currentUser.next({
        name: 'Fernando',
        passaporte: '576',
        idade: '21 anos',
        patente: 'Coronel',
        unidade: 'CORE',
        rg: '159CE51C8E36F519',
        tel: '108-555',
        permissions: [
          'prender',
          'relatorio',
          'multar',
          'acao'
        ]
      });
      return true;
    }
    return false;
  }

  verifyLoged() {
    return this.currentUser.pipe(
      map(user => { return user? true : false })
    )
  }


}
