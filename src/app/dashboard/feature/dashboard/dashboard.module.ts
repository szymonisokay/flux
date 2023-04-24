import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, SharedModule, TranslateModule],
  declarations: [DashboardComponent],
})
export class DashboardModule {}
