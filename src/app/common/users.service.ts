import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {ReplaySubject} from 'rxjs';
import {AuthService} from './auth.service';


@Injectable()
export class UsersService {

  users;
  authStatus$ = new ReplaySubject(1);

  constructor (
    private db: AngularFireDatabase,
    private authService: AuthService
  ) {
    this.authStatus$.next(this.authService.isSignIn());
    db.list('/users').valueChanges().subscribe((data: any) => {
      console.log(data);
      this.users = data;
    });
  }
}
