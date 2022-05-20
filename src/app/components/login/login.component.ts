import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { UsersService } from 'src/app/api-services/users.service';
import { ModulesService } from 'src/app/api-services/modules.service';
import { Login } from 'src/app/models/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginDisplay = false;
  displayedColumns: string[] = ['claim', 'value'];
  dataSource: any = [];

  private readonly _destroying$ = new Subject<void>();

  constructor(
    private router: Router,
    private userAPIService: UsersService,
    private modulesService: ModulesService
  ) {

  }

  ngOnInit(): void {
  this.getMenus('')    

  }


  getMenus(userName?: string): Promise<boolean> {

    return new Promise((resolve, reject) => {

      if (!userName) {
        reject('No hay usuario para validar');
      }

      const data: Login = {
        userName: userName
      };

      this.modulesService.postListModules(data).subscribe(res => {

        localStorage.setItem('MenuApp', JSON.stringify(res.data));
      
        if (res.success) {
          resolve(res.data)
        }

        resolve(false)
      }, err => {
        reject(err);
      });

    });

  }

  onLogin(){
    this.router.navigate(['/dashboard'])
  }

  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }
}
