import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  isLoading = new Subject<boolean>();
  isLoadingMain = new Subject<boolean>();
  customMessage = new BehaviorSubject<string>('');

  constructor() { }

  show() {
    this.isLoading.next(true);
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('loader');
  }
  hide() {
    this.isLoading.next(false);
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('loader');
  }
}
