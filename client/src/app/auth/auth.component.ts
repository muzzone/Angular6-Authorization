import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  template: '' +
  '<div class="authCard">\n' +
  '  <mat-card>\n' +
  '    <router-outlet></router-outlet>\n' +
  '  </mat-card>\n' +
  '</div>',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements  OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['auth/login']);
  }

}
