import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ExercisesComponent } from './exercises.component';
import { ExerciseCardModule } from '../../ui/exercise-card/exercise-card.module';
import { SharedLoadingCardsModule } from '../../../shared/ui/loading/cards/loading-cards.module';
import { SharedPaginationModule } from '../../../shared/ui/pagination/pagination.module';
import { SharedSearchModule } from '../../../shared/ui/search/search.module';
import { SharedPaginationMetaDataModule } from '../../../shared/ui/pagination/meta-data/pagination-meta-data.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ExerciseCardModule,
    SharedLoadingCardsModule,
    SharedPaginationModule,
    SharedPaginationMetaDataModule,
    SharedSearchModule,
  ],
  declarations: [ExercisesComponent],
})
export class ExercisesModule {}
