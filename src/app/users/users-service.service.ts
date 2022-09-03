import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserEntityModule } from '../Models/user-entity/user-entity.module';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  // apiMainUrl = 'http://localhost:8081/users';
  apiMainUrl = 'https://salty-tor-51245.herokuapp.com/users';
  addUser(userEntitiy: UserEntityModule): Observable<UserEntityModule> {
    return this.httpClient.post<UserEntityModule>(
      this.apiMainUrl + '/',
      userEntitiy
    );
  }
  addRandomUser(): Observable<UserEntityModule> {
    return this.httpClient.get<UserEntityModule>(this.apiMainUrl + '/random');
  }
  deleteUser(userId: String): Observable<any> {
    return this.httpClient.delete<boolean>(this.apiMainUrl + '/' + userId);
  }
  editUser(userEntitiy: UserEntityModule): Observable<UserEntityModule> {
    return this.httpClient.post<UserEntityModule>(
      this.apiMainUrl + '/',
      userEntitiy
    );
  }
  getUserInfo(userId: string): Observable<UserEntityModule> {
    return this.httpClient.get<UserEntityModule>(
      this.apiMainUrl + '/' + userId
    );
  }
  getAllUsersInfo(): Observable<UserEntityModule[]> {
    return this.httpClient.get<UserEntityModule[]>(this.apiMainUrl + '/all');
  }
  sendNotificationForUser() {}

  constructor(private httpClient: HttpClient) {}
}
