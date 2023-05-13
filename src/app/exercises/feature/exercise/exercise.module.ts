import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ExerciseComponent } from './exercise.component';

import { SharedPageHeaderModule } from '../../../shared/ui/page-header/page-header.module';
import { SharedLoadingCardsModule } from '../../../shared/ui/loading/cards/loading-cards.module';
import { ExerciseNoDataModule } from '../../ui/exercise-no-data/exercise-no-data.module';
import { ExerciseMetaDataModule } from '../../ui/exercise-meta-data/exercise-meta-data.module';

import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { ExerciseTabsModule } from '../../ui/exercise-tabs/exercise-tabs.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ExerciseNoDataModule,
    ExerciseMetaDataModule,
    ExerciseTabsModule,
    SharedPageHeaderModule,
    SharedLoadingCardsModule,
    NzSpaceModule,
    NzIconModule,
    NzTabsModule,
  ],
  declarations: [ExerciseComponent],
  exports: [ExerciseComponent],
})
export class ExerciseModule {}
