import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { ExerciseMetaDataComponent } from './exercise-meta-data.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    NzSpaceModule,
    NzIconModule,
    NzDividerModule,
  ],
  declarations: [ExerciseMetaDataComponent],
  exports: [ExerciseMetaDataComponent],
})
export class ExerciseMetaDataModule {}
