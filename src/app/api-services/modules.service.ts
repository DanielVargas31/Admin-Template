import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Login } from '../models/user';
import { Result } from '../models/result';

import { environment } from 'src/environments/environment';
import { MenuList } from '../models/menu-list';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ModulesService {
  url = environment.APIURL

  constructor(private http: HttpClient) { }

  postListModules(params: Login) {

    let mock: MenuList[] = [

      {
        moduleName: "Dashboard",
        icon: "fa-th-large",
        route: "/dashboard",
      },
      {
        icon: "fa-tasks",
        moduleName: "Datatable",
        route: "/datatable",
      },
      {
        icon: "fa-cogs",
        moduleName: "Configuracion",
        route: "/config",
      }
    ]
    let res: Result = {
      success: true,
      message: 'Melo',
      data: mock
    }
    let observable: Observable<Result> = new Observable((observer) => {
      observer.next(res);
      observer.complete();
    });

    return observable
  }
}
