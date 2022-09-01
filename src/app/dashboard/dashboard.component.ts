import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit ,AfterViewInit{
  loading = true;
  constructor() { }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  }

  ngOnInit(): void {
  }

}
