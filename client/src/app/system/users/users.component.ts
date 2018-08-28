import {Component, OnDestroy, OnInit} from '@angular/core';
import {UsersService} from '../../core/users.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
  users = [];
  aSub: Subscription;
  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.aSub = this.userService.getAll().subscribe((_users: any) => {
      console.log(_users);
      this.users = _users;
    });
  }

  ngOnDestroy() {
    this.aSub ? this.aSub.unsubscribe() : null;
  }

}
