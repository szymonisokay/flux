import { NgModule } from '@angular/core';
import { ExerciseTabsComponent } from './exercise-tabs.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { NzListModule } from 'ng-zorro-antd/list';

@NgModule({
  imports: [CommonModule, TranslateModule, NzListModule],
  declarations: [ExerciseTabsComponent],
  exports: [ExerciseTabsComponent],
})
export class ExerciseTabsModule {}
