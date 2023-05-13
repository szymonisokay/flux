import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { ExerciseNoDataComponent } from './exercise-no-data.component';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  imports: [CommonModule, TranslateModule, NzEmptyModule, NzButtonModule],
  declarations: [ExerciseNoDataComponent],
  exports: [ExerciseNoDataComponent],
})
export class ExerciseNoDataModule {}
