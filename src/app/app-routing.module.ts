import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/tablet/home/home.component';
import { LoginComponent } from './components/tablet/login/login.component';
import { MultarComponent } from './components/tablet/multar/multar.component';
import { PrenderComponent } from './components/tablet/prender/prender.component';
import { SearchComponent } from './share/search/search.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'prender', component: PrenderComponent
  },
  {
    path: '', component: HomeComponent
  },
  {
    path: 'search/:to', component: SearchComponent
  },
  {
    path: 'multar', component: MultarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
