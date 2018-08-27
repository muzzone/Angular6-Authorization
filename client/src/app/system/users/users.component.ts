import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../core/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = [];
  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.getAll().subscribe((_users: any) => {
      console.log(_users);
      this.users = _users;
    });
  }

}
