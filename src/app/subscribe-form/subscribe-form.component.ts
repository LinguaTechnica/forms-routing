import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'subscribe-form',
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['./subscribe-form.component.css']
})
export class SubscribeFormComponent implements OnInit {
  email: string;
  @ViewChild('subscribeForm')subscribeForm: NgForm;

  constructor() { }

  ngOnInit() {
  }

  submit(form) {
    if (form.valid) {
      console.log('Subscribed!');
    }
  }

}
