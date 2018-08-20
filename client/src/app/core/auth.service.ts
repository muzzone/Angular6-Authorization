import {Injectable} from '@angular/core';
import {ReplaySubject} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  private user = new ReplaySubject(1);
  constructor(private http: HttpClient) {
    const sevedUser = localStorage.getItem('user');
    this.user.next(sevedUser || null);
  }

  signUp(data) {
    return this.http.post('http://localhost:8080/api/register', data)
      .subscribe((res) => {console.log(res)})
  }

  logIn(data) {
    return this.http.post('http://localhost:8080/api/login', data)
      .subscribe((res: any) => {
        this.saveActiveUser(res.user, res.token);
      })
  }

  saveActiveUser(user, token) {
    const userData = JSON.stringify({user, token});
    localStorage.setItem('user', userData);
  }

  logOut() {
    localStorage.removeItem('user');
    this.user.next(null);
  }
}
