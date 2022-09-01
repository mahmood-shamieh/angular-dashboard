import { Component, OnInit } from '@angular/core';

interface SharedData {
  collapsed: boolean;
  screenWidth: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    // alert("application started");
  }
  title = 'mahmood-shamie-resume';
  collapsed = false;
  screenWidth = 0;
  collapsedBar(data : SharedData){
    this.collapsed = data.collapsed;
    this.screenWidth = data.screenWidth;
    console.log(this.screenWidth);
  }
}
