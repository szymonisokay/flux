import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ExercisesComponent } from './exercises.component';
import { ExerciseCardModule } from '../../ui/exercise-card/exercise-card.module';
import { SharedLoadingCardsModule } from '../../../shared/ui/loading/cards/loading-cards.module';
import { SharedPaginationModule } from '../../../shared/ui/pagination/pagination.module';
import { SharedSearchModule } from '../../../shared/ui/search/search.module';
import { SharedPaginationMetaDataModule } from '../../../shared/ui/pagination/meta-data/pagination-meta-data.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { AdvancedSearchModalModule } from '../../ui/advanced-search-modal/advanced-search-modal.module';
import { AdvancedSearchTagsModule } from '../../ui/advanced-search-tags/advanced-search-tags.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ExerciseCardModule,
    AdvancedSearchModalModule,
    AdvancedSearchTagsModule,
    SharedLoadingCardsModule,
    SharedPaginationModule,
    SharedPaginationMetaDataModule,
    SharedSearchModule,
    NzButtonModule,
    NzModalModule,
  ],
  declarations: [ExercisesComponent],
})
export class ExercisesModule {}
