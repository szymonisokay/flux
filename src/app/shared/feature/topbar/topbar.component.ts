import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../interfaces/app-state.interface';
import { authUserSelector } from '../../data-access/auth/auth.selectors';
import { SidebarService } from '../sidebar/data-access/sidebar.service';

@Component({
  selector: 'shared-topbar',
  templateUrl: './topbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopbarComponent {
  user$ = this.store.select(authUserSelector);

  constructor(
    private store: Store<AppState>,
    private sidebarService: SidebarService
  ) {}

  setSidebarStatus() {
    this.sidebarService.setIsOpenedStatus(true);
  }
}
