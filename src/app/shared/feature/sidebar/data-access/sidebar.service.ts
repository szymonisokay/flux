import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MenuItem } from '../interfaces/menu-item.interface';

@Injectable({ providedIn: 'root' })
export class SidebarService {
  isOpened$ = new BehaviorSubject<boolean>(false);

  menuItems: MenuItem[] = [
    {
      text: 'exercises',
      path: 'exercises',
      icon: 'thunderbolt',
    },
    {
      text: 'trainingPlans',
      path: 'training-plans',
      icon: 'book',
    },
  ];

  constructor() {}

  setIsOpenedStatus(status: boolean): void {
    this.isOpened$.next(status);
  }

  toggleIsOpenedStatus(): void {
    this.isOpened$.next(!this.isOpened$.value);
  }

  getIsOpenedStatus(): Observable<boolean> {
    return this.isOpened$.asObservable();
  }

  getMenuItems(): MenuItem[] {
    return this.menuItems;
  }
}
