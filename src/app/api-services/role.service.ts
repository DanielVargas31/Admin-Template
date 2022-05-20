import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Result } from '../models/result';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RoleService {

  url = environment.APIURL

  constructor(private http: HttpClient) { }

  getListRoles() {
    return this.http.get<Result>(`${this.url}/Roles/ListRoles`);
  }
}
