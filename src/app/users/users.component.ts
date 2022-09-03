import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import {
  faBell,
  faPenToSquare,
  faTrash,
  faToggleOn,
  faToggleOff,
  faAddressCard,
} from '@fortawesome/free-solid-svg-icons';
import { MatTableDataSource } from '@angular/material/table';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { interval } from 'rxjs/internal/observable/interval';
import { MatChip } from '@angular/material/chips';
import { FormControl } from '@angular/forms';
import { UsersService } from './users-service.service';
import { UserEntityModule } from '../Models/user-entity/user-entity.module';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements AfterViewInit, OnInit {
  sendNotificationIcon = faBell;
  editIcon = faPenToSquare;
  deleteIcon = faTrash;
  activeIcon = faToggleOn;
  notActiveIcon = faToggleOff;
  infoIcon = faAddressCard;
  progressValue = 0;
  text: FormControl;
  displayedColumns: string[] = [
    'ID',
    'USERNAME',
    'AGE',
    'CREATED-AT',
    'PHONE',
    'MOBILE',
    'EMAIL',
    'VERIFIED',
    'GENDER',
    'FIRST-NAME',
    'LAST-NAME',
    'MIDDLE-NAME',
    'BALANCE',
    'ADRESS',
    'LEVEL-ID',
    'actions',
  ];
  dataSource = new MatTableDataSource<UserEntityModule>();
  loading = true;
  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(private userService: UsersService, private dialogBox: MatDialog , ) {
    this.text = new FormControl();
    this.dataSource.paginator = this.paginator!;
    this.dataSource.data = [];
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.loading = true;
      this.userService
        .getAllUsersInfo()
        .pipe()
        .subscribe(
          (data) => {
            console.log(data);
            this.dataSource.data = data;
          },
          (error) => {
            console.log(error);
          }
        );
      this.loading = false;
    }, 0);
  }

  openDialog(
    message: string,
    dialogType: number,
    userId?: number,
    activeUser?: boolean
  ): void {
    const dialogRef = this.dialogBox.open(AlertDialogComponent, {
      // width: '250px',
      data: {
        message:message,
        dialogType: dialogType,
        userId: userId,
        active: activeUser,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  ngOnInit(): void {
    this.setProgressValue();
  }
  setProgressValue() {
    const timer$ = interval(100);
    let divider: number = 1;

    const sub = timer$.subscribe(async (sec) => {
      if (this.progressValue > 100) {
        this.progressValue = -10;
        await setTimeout(() => {}, 100);
      }
      this.progressValue = this.progressValue + 5;
      if (!this.loading) {
        sub.unsubscribe();
      }
    });
  }
  toggleSelection(chip: MatChip) {
    chip.toggleSelected();
  }
  getRandomColor() {
    console.log(Math.floor((Math.random() * 10) % 2));
    switch ((Math.random() * 10) % 2) {
      case 0:
        return 'primary';
      case 1:
        return 'accent';
      default:
        break;
    }
    let letters: string = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
