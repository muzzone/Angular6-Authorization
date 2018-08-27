import {Component, OnInit} from '@angular/core';
import {AuthService} from '../core/auth.service';

@Component({
  selector: 'app-system',
  template: '' +
  '<div>system component</div>' +
  // '<h3 *ngIf="!user">You must be logged in</h3>' +
  '<router-outlet></router-outlet>',
})

export class SystemComponent implements OnInit {
  private user;
  constructor(private authService: AuthService) {
    authService.activeUser.subscribe((_user => {this.user = _user}));
  }
  ngOnInit() {
    console.log('system component work')
  }
}
