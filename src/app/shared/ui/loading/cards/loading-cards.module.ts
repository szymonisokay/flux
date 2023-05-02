import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { LoadingCardsComponent } from './loading-cards.component';

@NgModule({
  imports: [CommonModule, NzCardModule],
  declarations: [LoadingCardsComponent],
  exports: [LoadingCardsComponent],
})
export class SharedLoadingCardsModule {}
