import {Injectable} from '@angular/core';
import {ReplaySubject} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  private activeUser = new ReplaySubject(1);
  constructor(private http: HttpClient) {
    const savedUser = localStorage.getItem('user');
    this.activeUser.next(savedUser || null);
  }

  signUp(data) {
    return this.http.post('/api/register', data)
      .subscribe((res: any) => {
        this.setActiveUser(res.user, res.token);
      })
  }

  logIn(data) {
    return this.http.post('/api/login', data)
      .subscribe((res: any) => {
        this.setActiveUser(res.user, res.token);
      })
  }

  setActiveUser(user, token) {
    const userData = JSON.stringify({user, token});
    localStorage.setItem('user', userData);
    this.activeUser.next(userData);
  }

  logOut() {
    localStorage.removeItem('user');
    this.activeUser.next(null);
  }
}
