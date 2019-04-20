import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'subscribe-form',
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['./subscribe-form.component.css']
})
export class SubscribeFormComponent implements OnInit {
  email: any = '';

  constructor() { }

  ngOnInit() {
  }

  /**
   * Submit form
   * @event
   * @param form variable
   */
  submit(form) {
    if (form.valid) {
      console.log('Subscription success!', form.value);
    } else {
      console.log('Subscribe FAIL!');
    }
  }
}
