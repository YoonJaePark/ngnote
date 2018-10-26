import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthService} from './auth.service';
import {reject} from 'q';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    public afAuth: AngularFireAuth,
    public userService: AuthService,
    private router: Router
  ) {
  }

  canActivate(): Promise<boolean> {
    return new Promise((resolve) => {
      this.afAuth.authState.subscribe(o => {
        if (o === null) {
          this.router.navigate(['/login']);
          resolve(false);
        } else {
          resolve(true);
        }
      });
    });
  }
}
