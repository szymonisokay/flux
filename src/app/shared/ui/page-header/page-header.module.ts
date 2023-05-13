import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { PageHeaderComponent } from './page-header.component';

@NgModule({
  imports: [CommonModule, TranslateModule, NzPageHeaderModule],
  declarations: [PageHeaderComponent],
  exports: [PageHeaderComponent],
})
export class SharedPageHeaderModule {}
