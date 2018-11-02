import {Component, OnInit} from '@angular/core';
import {DaoService} from './core/http/dao.service';
import {map} from 'rxjs/operators';
import {AuthService} from './core/authentication/auth.service';

export class Board {
  content: string;
  createdAt: number;
  email: string;
  likes: {
    count: number;
  };
  uid: string;
  updatedAt: number;
  user: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
  }
}
