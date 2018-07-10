import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {ReplaySubject} from 'rxjs';

@Injectable()
export class AuthService {
  authStatus$ = new ReplaySubject(1);

  constructor (
    private http: HttpClient,
    private au: AngularFireAuth,
  ) {
    this.authStatus$.next(this.isSignIn());
  }

  signUp(email, password) {
    return this.au.auth.createUserWithEmailAndPassword(email, password)
      .then((response) => {
        this.authStatus$.next(true);
        this.isSignIn();
        console.log(response)
      })
      .catch((err) => {console.log(err)})
  }

  logIn(email, password) {
    return this.au.auth.signInWithEmailAndPassword(email, password)
      .then((response) => {
        this.authStatus$.next(true);
        this.isSignIn();
        console.log(response)
      })
      .catch((err) => {console.log(err)})
  }

  logOut() {
    this.au.auth.signOut()
      .then(() => {
        this.authStatus$.next(false);
        this.isSignIn()
      })
      .catch((err) => {console.log(err)})
  }

  authStatus() {
    return this.authStatus$;
  }

  isSignIn() {
    console.log('current user', this.au.auth.currentUser, 'sign in = ', this.au.auth.currentUser !== null);
    return this.au.auth.currentUser !== null;
  }
}
