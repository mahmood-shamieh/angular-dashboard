import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lolo',
  templateUrl: './lolo.component.html',
  styleUrls: ['./lolo.component.css']
})
export class LoloComponent implements OnInit {
  @Input() body : any;
  @Input() primaryfunction: Function | any;
  @Input() dangerfunction: Function | any;

  constructor() { }

  ngOnInit(): void {
  }

}
