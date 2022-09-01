import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav2',
  templateUrl: './nav2.component.html',
  styleUrls: ['./nav2.component.css']
})
export class Nav2Component implements OnInit {

  navLogo:string = "assets/it-logo.png"
  constructor() { }

  ngOnInit(): void {
  }

}
