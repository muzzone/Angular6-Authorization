import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../common/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, this.checkForLength]),
      pwd: new FormControl('', [Validators.required, this.checkForLength]),
    });
  }

  submitForm() {
    const formData = this.loginForm.value;
    const user = this.userService.getUserByEmail(formData.email);
    if (user) {
      console.log(user.email);
      if (user.password === formData.pwd) {
        console.log(user)
      } else {
        console.log('pwd err')
      }
    } else {
      console.log('email err')
    }
  }

  checkForLength(control: FormControl) {
    if (control.value.length <= 3) {
      return {
        'lengthError': true
      };
    }
    return null;
  }

}
