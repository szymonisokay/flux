import { Component } from '@angular/core';
import { SidebarService } from './data-access/sidebar.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../interfaces/app-state.interface';
import { logout } from '../../data-access/auth/auth.actions';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  isOpened$ = this.sidebarService.getIsOpenedStatus();
  menuItems = this.sidebarService.getMenuItems();

  constructor(
    private sidebarService: SidebarService,
    private store: Store<AppState>
  ) {}

  onCloseSidebar() {
    this.sidebarService.setIsOpenedStatus(false);
  }

  removeSidebar() {
    this.onCloseSidebar();
  }

  onLogout() {
    this.store.dispatch(logout({ message: 'logout' }));
    this.onCloseSidebar();
  }
}
