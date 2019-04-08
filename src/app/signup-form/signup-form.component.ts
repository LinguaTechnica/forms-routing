import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  signupForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    email: [''],
    password: [''],
    passwordConf: ['']
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
}
