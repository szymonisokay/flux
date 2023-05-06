import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'flux-dashboard',
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {}
