import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthService} from '../../auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private router: Router,
              private route: ActivatedRoute,
              public auth: AuthService) {
  }


  ngOnInit() {
  }


}
