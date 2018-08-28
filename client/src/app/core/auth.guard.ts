import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuard  implements CanActivate, CanActivateChild {
  user;
  constructor(private authService: AuthService) {
    authService.getActiveUser().subscribe(user => {
      this.user = user;
    })
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return !!this.user
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return !!this.user
  }
}
