import {Injectable, OnInit} from '@angular/core';
import {AuthService} from '../../core/auth.service';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor, OnInit {
  private user;
  constructor(private auth: AuthService) {
    this.auth.getActiveUser().subscribe(_user => {
      this.user = _user;
    })
  }

  ngOnInit() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.user) {
      req = req.clone({
        setHeaders: {
          Authorization: this.user.token
        }
      })
    }
    return next.handle(req);
  }
}
