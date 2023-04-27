import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { ExercisesComponent } from './exercises.component';

@NgModule({
  imports: [CommonModule, SharedModule, TranslateModule],
  declarations: [ExercisesComponent],
})
export class ExercisesModule {}
