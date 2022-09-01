import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  @Input() collapsed = false;
  @Input() screenWidth = 0;
  constructor() {}
  getBodyClass(): String {
    let styleClass :String = '';
    if (!this.collapsed /* && this.screenWidth > 768 */) styleClass = 'large-body';
    else if (this.collapsed /* && this.screenWidth < 768 && this.screenWidth > 0 */)
      styleClass = 'small-body';
      // console.log(styleClass);
    return styleClass;
  }
  ngOnInit(): void {}
}
