import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuList } from 'src/app/models/menu-list';
import { Subject } from 'rxjs';
import { MenuService } from 'src/app/services/menu.service';
import Dialogtype, { Dialog } from 'src/app/libs/dialog.lib';



@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.scss']
})
export class MasterPageComponent implements OnInit {

  activeMenulength: string = '0px';
  menuHeight: string = '0px';
  menuArray: Array<MenuList> = [];
  activeIndex: number = 0;
  profilePicture: string = 'assets/images/not-found.png';
  loginDisplay = false;
  private readonly _destroying$ = new Subject<void>();

  constructor(
    private router: Router,
    private menuService: MenuService,
  ) {





  }

  ngOnInit(): void {
    this.buildMenu();
    
  }

  onRouteClick(index: number) {

    const menuRoot = this.menuArray[index].route;

    this.slideMenuAnimation(index);

    setTimeout(() => {
      if (menuRoot != '') {
        this.router.navigate([menuRoot]);
      } else {
        this.router.navigate(['not-found-page']);
      }
    }, 400);

  }

  slideMenuAnimation(index: number) {

    if (index < this.menuArray.length) {
      this.activeIndex = index;
      this.menuService.setActiveIndex(index);
      this.activeMenulength = `calc(((100% / ${this.menuArray.length == 0 ? 1 : this.menuArray.length}) * ${index}))`;
    } else {
      this.activeIndex = 0;
      this.menuService.setActiveIndex(0);
      this.activeMenulength = `calc(((100% / ${this.menuArray.length == 0 ? 1 : this.menuArray.length}) * ${index}))`;
    }
  }

  onLogout() {
    Dialog.show( '¿Estás seguro que deseas cerrar sesión?', Dialogtype.question ).subscribe(res => {
      if (res) {
        localStorage.clear();
        this.router.navigate(['/']);
      }
    });

  }

  buildMenu() {
    let menuApp: string = localStorage.getItem('MenuApp') as string;
    if (menuApp != null) {
      this.menuArray = JSON.parse(menuApp) as Array<MenuList>;
      this.menuHeight = `calc(70px * ${this.menuArray.length == 0 ? 1 : this.menuArray.length})`;
      this.slideMenuAnimation(this.menuService.activeIndex$.value);
      this.profilePicture = !localStorage.getItem('profilePic') ? 'assets/images/not-found.png' : localStorage.getItem('profilePic') as string;
    }
  }

  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }

}
