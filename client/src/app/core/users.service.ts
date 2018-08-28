import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';

@Injectable()
export class UsersService {
  currentUser;
  constructor(private http: HttpClient, private authService: AuthService) {
    this.authService.getActiveUser().subscribe(user => this.currentUser = user)
  };

  headers() {
    if (this.currentUser.token) {
      return {
        headers: new HttpHeaders({
          'Authorization': this.currentUser.token
        })
      }
    }
  }

  getAll() {
    return this.http.get('/api/users/', this.headers());
  };

  getById(id) {
    return this.http.get('/api/users/user?id=' + id, this.headers());
  }

  delete(id) {
    return this.http.delete('/api/users/delete/' + id, this.headers());
  }
}
