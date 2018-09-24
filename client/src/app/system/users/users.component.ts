import {Component, OnDestroy, OnInit} from '@angular/core';
import {UsersService} from '../../core/users.service';
import {Subscription} from 'rxjs';

interface User {
  email: string;
  name: string;
  id: number;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
  users: User[] = [];
  displayedColumns: string[] = ['index', 'email', 'name', 'id'];
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
