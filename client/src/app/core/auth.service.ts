import {Injectable} from '@angular/core';
import {ReplaySubject} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';


@Injectable()
export class AuthService {
  private activeUser = new ReplaySubject(1);
  constructor(private http: HttpClient, private router: Router) {
    const savedUser = localStorage.getItem('user');
    savedUser ? this.activeUser.next(JSON.parse(savedUser)) : this.activeUser.next(null);
  }

  signUp(data) {
    return this.http.post('/api/register', data)
      .subscribe((res: any) => {
        if (res.user && res.token) {
          this.setActiveUser(res.user, res.token);
          this.router.navigate(['/']);
        }
      })
  }

  logIn(data) {
    return this.http.post('/api/login', data)
      .subscribe((res: any) => {
        if (res.user && res.token) {
          this.setActiveUser(res.user, res.token);
          this.router.navigate(['/']);
        }
      });
  }

  setActiveUser(user, token) {
    const userData = {user, token};
    localStorage.setItem('user', JSON.stringify(userData));
    this.activeUser.next(userData);
  }

  getActiveUser() {
    return this.activeUser;
  }

  logOut() {
    localStorage.removeItem('user');
    this.activeUser.next(null);
    this.router.navigate(['/auth']);
  }
}
