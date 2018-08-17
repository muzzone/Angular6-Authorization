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
    return this.http.post('http://localhost:8080/api/register', data);
  }

  logIn(data) {
    return this.http.post('http://localhost:8080/api/login', data);
  }

  logOut() {
    localStorage.removeItem('user');
    this.user.next(null);
  }
}
