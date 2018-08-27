import {Component} from '@angular/core';

@Component({
  selector: 'app-system',
  template: '' +
  '<h2>Main Page</h2>' +
  '<button routerLink="/users">Users</button>' +
  '<router-outlet></router-outlet>',
})

export class SystemComponent {}
