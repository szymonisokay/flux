import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { DashboardItemComponent } from '../../ui/dashboard-item/dashboard-item.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { CarouselComponent } from '../../ui/carousel/carousel.component';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    TranslateModule,
    NzCardModule,
    NzCarouselModule,
    NzTypographyModule,
    NzSpaceModule,
    NzButtonModule,
  ],
  declarations: [DashboardComponent, DashboardItemComponent, CarouselComponent],
})
export class DashboardModule {}
