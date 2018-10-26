import {Component, OnInit} from '@angular/core';
import {DaoService} from '../../dao.service';
import {AuthService} from '../../auth.service';
import {map} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router,
              private route: ActivatedRoute,
              public afAuth: AngularFireAuth,
              public auth: AuthService) {

  }

  ngOnInit() {
  }


  loginGoogle() {
    this.auth.doGoogleLogin().then(res => {
      this.router.navigate(['/boards']);
    });
  }
}
