import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class UserEntityModule {
  public constructor() {}
  id: number | any;
  username: string | any;
  password: string | any;
  age: string | any;
  createdAt: string | any;
  phone: string | any;
  mobile: string | any;
  email: string | any;
  active: string | any;
  verified: string | any;
  gender: string | any;
  firstName: string | any;
  lastName: string | any;
  middleName: string | any;
  balance: number | any;
  address: string | any;
  levelId: number | any;
  profileMediaId: number | any;
  fcm_Token: string | any;
  inialtProp(data: any) {
    if (data == null) return;
    this.id = data.id;
    this.username = data.username;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.middleName = data.middleName;
    this.levelId = data.levelId;
    this.balance = data.balance;
    this.address = data.address;
    this.gender = data.gender;
    this.verified = data.verified;
    this.email = data.email;
    this.mobile = data.mobile;
    this.phone = data.phone;
    this.age = data.age;
    this.createdAt = data.createdAt;
    this.password = data.password;
    this.active = data.active;
    this.profileMediaId = data.profileMediaId;
    this.fcm_Token = data.fcm_Token;
  }
  getUserDataFromFormGroup(formGroup: any) {
    if (formGroup == null) return;
    this.username = formGroup.username.value;
    this.firstName = formGroup.firstName.value;
    this.lastName = formGroup.lastName.value;
    this.middleName = formGroup.middleName.value;
    this.levelId = formGroup.levelId.value;
    this.balance = formGroup.balance.value;
    this.address = formGroup.address.value;
    this.gender = formGroup.gender.value;
    this.verified = formGroup.verified.value;
    this.email = formGroup.email.value;
    this.mobile = formGroup.mobile.value;
    this.phone = formGroup.phone.value;
    this.age = formGroup.age.value;
    this.createdAt = formGroup.createdAt.value;
  }
}
