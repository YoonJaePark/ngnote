import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import { AuthService } from 'src/app/core/authentication/auth.service';

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
      console.log('res', res);
      this.router.navigate(['/boards']);
    });
  }
}
