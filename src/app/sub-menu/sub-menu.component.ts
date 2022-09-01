import { Component, Input, OnInit } from '@angular/core';
import { NavBarItem } from '../sidenav/navBarItem';
import { faCircleArrowDown , faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';


interface SharedData {
  collapsed: boolean;
  screenWidth: number;
}
@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  // styleUrls: ['./sub-menu.component.css']
  styleUrls: ['./sub-menu.component.css'],
})
export class SubMenuComponent implements OnInit {

  @Input() levelData :NavBarItem | undefined ;
  @Input() Expanded : boolean = false ;
  @Input() animating : boolean = false ;
  @Input() multi : boolean = false ;
  @Input() collapesd:boolean = false;
  arrowDownIcon = faCircleArrowDown;
  arrowUpIcon = faCircleArrowUp;
  constructor() { }
  expandList(data:NavBarItem):void{
    data.expanded = true;
    this.levelData!.items.forEach(e=>{
      if(e.label!= data.label)
      e.expanded = false;
    });

  }
  collapsed = false;
  screenWidth = 0;
  collapsedBar(data : SharedData){
    this.collapsed = data.collapsed;
    this.screenWidth = data.screenWidth;
    console.log(this.screenWidth);
  }

  ngOnInit(): void {
  }

}
