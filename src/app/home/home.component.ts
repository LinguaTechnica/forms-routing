import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: string = 'guest' || localStorage.getItem('currentUser');
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data) => console.log(data));
  }

}
