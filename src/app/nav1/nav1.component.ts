import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav1',
  templateUrl: './nav1.component.html',
  styleUrls: ['./nav1.component.css']
})
export class Nav1Component implements OnInit {
  navImage:string = "assets/nav image.png";

  constructor() { }

  ngOnInit(): void {
    var col = document.getElementById("1");
    let container : HTMLElement = col?.getElementsByClassName('container').item(0)! as HTMLElement;
    container.style.display = "block";
  }
  navigate(id:string) {
    let secctions:HTMLCollection = document.getElementsByTagName("li");
    for (let i=1; i<=6; i=i+1 ) {
      if(secctions.item(i-1)?.id != id){
        let container : HTMLElement = secctions.item(i-1)?.getElementsByClassName('container').item(0)! as HTMLElement;
        container.style.display = "none";
      }
  }
    var col = document.getElementById(id);
    let container : HTMLElement = col?.getElementsByClassName('container').item(0)! as HTMLElement;
    container.style.display = "block";
  }

}
