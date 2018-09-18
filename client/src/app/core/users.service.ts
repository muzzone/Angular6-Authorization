import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';

@Injectable()
export class UsersService {
  currentUser;
  constructor(private http: HttpClient, private authService: AuthService) {
    this.authService.getActiveUser().subscribe(user => this.currentUser = user)
  };

  getAll() {
    return this.http.get('/api/users/');
  };

  getById(id) {
    return this.http.get('/api/users/user?id=' + id);
  }

  delete(id) {
    return this.http.delete('/api/users/delete/' + id);
  }
}
