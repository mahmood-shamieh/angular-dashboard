import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  faCircleExclamation,
  faBell,
  faInfoCircle,
  faUserPen,
  faUserSlash,
  faUserLarge
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.css'],
})
export class AlertDialogComponent implements OnInit, AfterViewInit {
  imagePath :string;
  userData: any;
  isLoading: boolean = true;
  alertIcon = faCircleExclamation;
  informationIcon = faInfoCircle;
  notificationIcon = faBell;
  editIcon=faUserPen;
  activeUserIcon = faUserLarge;
  diactiveUserIcon = faUserSlash;
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private httpClient: HttpClient
  ) {
    this.imagePath = "./assets/warning.gif";
  }
  ngAfterViewInit(): void {
    switch (this.data.dialogType) {
      case 1: {
        this.isLoading = false;
        break;
      }
      case 2: {
        console.log(this.data.userId);
        this.httpClient
          .get<any>('https://salty-tor-51245.herokuapp.com/users/' + this.data.userId)

          // .get<any>('http://127.0.0.1:8081/users/' + this.data.userId)
          .subscribe(
            (data) => {
              console.log(data);
              this.userData = data;
              this.isLoading = false;
            },
            (error) => {
              console.log(error);
            }
          );
        break;
      }
      case 3: {
        this.httpClient
          .get<any>('https://salty-tor-51245.herokuapp.com/users/' + this.data.userId)

          // .get<any>('http://127.0.0.1:8081/users/' + this.data.userId)
          .subscribe(
            (data) => {
              console.log(data);
              this.userData = data;
              this.isLoading = false;
            },
            (error) => {
              console.log(error);
            }
          );
        break;
      }
      case 4: {
        this.isLoading = false;
        break;
      }
      case 5: {
        this.isLoading = false;
        break;
      }
      default: {
        alert('nothings to do');
        break;
      }
    }
  }

  ngOnInit(): void {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
