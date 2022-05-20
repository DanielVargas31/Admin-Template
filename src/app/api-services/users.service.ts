import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Login, User } from '../models/user';
import { Result } from '../models/result';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = environment.APIURL;

  constructor(private http: HttpClient,) { }

  postCreateUser(params: User) {
    return this.http.post<Result>(`${this.url}/User/CreateUser`, params);
  }
  postEditUser(params: User) {
    return this.http.post<Result>(`${this.url}/User/EditUser`, params);
  }
  postListUserByFilter(params: User) {
    return this.http.post<Result>(`${this.url}/User/ListUserByFilter`, params);
  }
  getListUsers() {
    return this.http.get<Result>(`${this.url}/User/ListUsers`);
  }
  postLoginAsync(params: Login) {
    return this.http.post<Result>(`${this.url}/User/LoginAsync`, params);
  }
}
