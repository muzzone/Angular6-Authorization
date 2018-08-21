import {Component, OnInit} from '@angular/core';
// import {Router} from '@angular/router';

@Component({
  selector: 'app-system',
  template: '' +
  '<div>system component</div>' +
  '<router-outlet></router-outlet>',
})

export class SystemComponent implements OnInit {
  ngOnInit() {
    console.log('system component work')
  }
}
