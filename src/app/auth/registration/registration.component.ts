import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationFrom: FormGroup;

  constructor() { }

  ngOnInit() {
    this.registrationFrom = new FormGroup({
      email: new FormControl('', [Validators.email, this.checkForLength]),
      name: new FormControl('', [Validators.required, this.checkForLength]),
      pwd: new FormControl('', [Validators.required, this.checkForLength]),
    });
  }

  submitForm() {
    console.log(this.registrationFrom.value)
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
