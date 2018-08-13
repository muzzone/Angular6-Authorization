import { Component, OnInit } from '@angular/core';
import {FirebaseAuthService} from '../common/firebase-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isSignIn: boolean;

  constructor(public authService: FirebaseAuthService) { }

  ngOnInit() {
  this.authService.authStatus().subscribe((bool: boolean) => {
    this.isSignIn = bool;
  });
  }

}
