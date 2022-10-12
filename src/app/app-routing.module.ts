import { BaseCodPenalComponent } from './components/tablet/base-cod-penal/base-cod-penal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/tablet/home/home.component';
import { LoginComponent } from './components/tablet/login/login.component';
import { MultarComponent } from './components/tablet/multar/multar.component';
import { PrenderComponent } from './components/tablet/prender/prender.component';
import { CodpenalComponent } from './share/codpenal/codpenal.component';
import { SearchComponent } from './share/search/search.component';
import { AcaoComponent } from './components/tablet/acao/acao.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'prender', component: PrenderComponent
  },
  {
    path: 'search/:to', component: SearchComponent
  },
  {
    path: 'multar', component: MultarComponent
  },
  {
    path: 'codpenal', component: BaseCodPenalComponent
  },
  {
    path: 'acao', component: AcaoComponent
  },
  {
    path: '', component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
