import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  faCircleExclamation,
  faBell,
  faInfoCircle,
  faUserPen,
  faUserSlash,
  faUserLarge,
} from '@fortawesome/free-solid-svg-icons';
import { UserEntityModule } from '../Models/user-entity/user-entity.module';
import { UsersService } from '../users/users-service.service';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.css'],
})
export class AlertDialogComponent implements OnInit, AfterViewInit {
  @Output() userUpdatedEvent :EventEmitter< any> = new EventEmitter();
  userData: UserEntityModule;
  isLoading: boolean = true;
  alertIcon = faCircleExclamation;
  informationIcon = faInfoCircle;
  notificationIcon = faBell;
  editIcon = faUserPen;
  activeUserIcon = faUserLarge;
  diactiveUserIcon = faUserSlash;
  formControls: any;
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private UserService: UsersService
  ) {
    this.userData = new UserEntityModule();
  }
  ngAfterViewInit(): void {
    switch (this.data.dialogType) {
      case 1: {
        this.isLoading = false;
        break;
      }
      case 2: {
        setTimeout(() => {
          this.isLoading = true;
          this.UserService.getUserInfo(this.data.userId).subscribe(
            (data) => {
              this.userData.inialtProp(data);
              this.isLoading = false;
            },
            (error) => {
              console.log(error);
            }
          );
        }, 0);
        break;
      }
      case 3: {
        setTimeout(() => {
          this.isLoading = true;
          this.UserService.getUserInfo(this.data.userId).subscribe(
            (data) => {
              this.userData.inialtProp(data);
              this.isLoading = false;
              this.formControls = {
                id:new FormControl(this.userData.id),
                username: new FormControl(this.userData.username),
                firstName: new FormControl(this.userData.firstName),
                lastName: new FormControl(this.userData.lastName),
                middleName: new FormControl(this.userData.middleName),
                levelId: new FormControl(this.userData.levelId),
                balance: new FormControl(this.userData.balance),
                address: new FormControl(this.userData.address),
                gender: new FormControl(this.userData.gender),
                verified: new FormControl(this.userData.verified),
                email: new FormControl(this.userData.email),
                mobile: new FormControl(this.userData.mobile),
                phone: new FormControl(this.userData.phone),
                age: new FormControl(this.userData.age),
                createdAt: new FormControl(this.userData.createdAt),
              };
            },
            (error) => {
              console.log(error);
            }
          );
        }, 0);
        break;
      }
      case 4: {
        setTimeout(() => {
          this.isLoading = false;
        this.userData.id = this.data.userId;
        }, 0);
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

  updateUserEntity() {
    this.userData.getUserDataFromFormGroup(this.formControls);
    this.UserService.addUser(this.userData)
      .pipe()
      .subscribe(
        (data) => {
          console.log(data);
          this.userUpdatedEvent.emit({});
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
  }
  deleteUserEntitiy() {
    this.UserService.deleteUser(this.userData.id)
      .pipe()
      .subscribe(
        (data) => {
          console.log(data);
          this.userUpdatedEvent.emit({});
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
  }

  ngOnInit(): void {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
