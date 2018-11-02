import {Injectable, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './core/guards/auth.guard';
import { LoginComponent } from './modules/home/pages/login/login.component';
import { BoardsComponent } from './modules/home/pages/boards/boards.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'boards', component: BoardsComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: false, scrollPositionRestoration: 'top'}),
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

  constructor() { }
}
