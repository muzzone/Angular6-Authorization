import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuard  implements CanActivate {
  user;
  constructor(private authService: AuthService) {
    authService.activeUser.subscribe(user => {
      this.user = user;
    })
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return !!this.user
  }
}
