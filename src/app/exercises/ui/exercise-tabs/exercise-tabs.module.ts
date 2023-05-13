import { NgModule } from '@angular/core';
import { ExerciseTabsComponent } from './exercise-tabs.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { NzListModule } from 'ng-zorro-antd/list';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { SharedVideoModule } from '../../../shared/ui/video/video.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SharedVideoModule,
    NzListModule,
    NzTimelineModule,
  ],
  declarations: [ExerciseTabsComponent],
  exports: [ExerciseTabsComponent],
})
export class ExerciseTabsModule {}
