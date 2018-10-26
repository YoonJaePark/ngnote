import {Injectable, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './main/login/login.component';
import {BoardsComponent} from './main/boards/boards.component';
import {AuthGuard} from './auth.guard';
import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'boards', component: BoardsComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: false}),
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

  constructor() { }
}
