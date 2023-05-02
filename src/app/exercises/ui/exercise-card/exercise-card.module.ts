import { NgModule } from '@angular/core';
import { ExerciseCardComponent } from './exercise-card.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    NzCardModule,
    NzIconModule,
    NzSpaceModule,
    NzTypographyModule,
    NzButtonModule,
  ],
  declarations: [ExerciseCardComponent],
  exports: [ExerciseCardComponent],
})
export class ExerciseCardModule {}
