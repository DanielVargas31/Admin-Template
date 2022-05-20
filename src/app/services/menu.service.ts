import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  public activeIndex$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() { 
    this.getActiveIndex();
  }

  setActiveIndex(index: number) {
    this.activeIndex$.next(index);
    localStorage.setItem('activeMenuIndex', index.toString());
  }

  private getActiveIndex(){
    const activeIndex = localStorage.getItem('activeMenuIndex');
    this.activeIndex$.next(!activeIndex ? 0 : parseInt(activeIndex));
  }
}
