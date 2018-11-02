import {Component} from '@angular/core';

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
