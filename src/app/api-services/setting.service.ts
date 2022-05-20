import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result } from '../models/result';
import { Settings } from '../models/settings';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  
  url = environment.APIURL
  
  constructor(private http: HttpClient) { }

  postEditSetting(params: Settings) {    
    return this.http.post<Result>(`${this.url}/Settings/EditSettings`, params);
  }
  getListSettings() {    
    return this.http.get<Result>(`${this.url}/Settings/ListAllSettings`);    
  }
}
