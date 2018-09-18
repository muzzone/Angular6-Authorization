import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html'
})

export class SystemComponent {
  router;
  constructor(private _router: Router) {
    this.router = _router;
  }
}
