import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute,
              public afAuth: AngularFireAuth,
              public auth: AuthService) {
  }

  ngOnInit() {
   // this.goToHome();
  }

  goToHome() {
    if (this.afAuth.auth.currentUser) {
      this.router.navigate(['/boards']);
    } else {
      this.router.navigate(['/']);
    }
  }

  logout() {
    this.auth.doLogout().then(res => {
      this.router.navigate(['/']);
    });
  }
}
