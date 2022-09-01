import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { navData } from './navData';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { faCircleArrowDown , faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';
import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { NavBarItem } from './navBarItem';
import {Router} from '@angular/router'; // import router from angular router


interface SharedData {
  collapsed: boolean;
  screenWidth: number;
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('400ms', style({ opacity: 0 })),
      ]),
    ]),
    trigger('rotate', [
      transition(':enter', [
        animate(
          '500ms',
          keyframes([
            style({ transform: 'rotate(0deg)', offset: '0' }),
            style({ transform: 'rotate(1turn)', offset: '1' }),
          ])
        ),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('400ms', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class SidenavComponent implements OnInit {
  @Output() toggleEvent: EventEmitter<SharedData> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navData;
  closeButtonIcon = faClose;
  arrowDownIcon = faCircleArrowDown;
  arrowUpIcon = faCircleArrowUp;
  constructor(private router : Router) {}
  navigateToHome():void{
    this.router.navigate(['/']);
  }
  collapsedBar(): void {
    this.collapsed = !this.collapsed;
    this.toggleEvent.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }
  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }
  expandList(data:NavBarItem):void{
    data.expanded = true;
    this.navData.forEach(element => {
      if(element.label != data.label)
      {
        element.expanded = false;
      }
    });

  }
}

