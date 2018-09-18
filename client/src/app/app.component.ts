import { Component } from '@angular/core';
import {AuthService} from './core/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentUser;
  router;
  constructor(private authService: AuthService, private _router: Router) {
    authService.getActiveUser().subscribe(user => this.currentUser = user);
    this.router = _router;
  }
}
