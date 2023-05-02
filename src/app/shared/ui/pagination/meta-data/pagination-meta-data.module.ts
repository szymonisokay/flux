import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { PaginationMetaDataComponent } from './pagination-meta-data.component';

@NgModule({
  imports: [CommonModule, TranslateModule, NzSpaceModule, NzTypographyModule],
  declarations: [PaginationMetaDataComponent],
  exports: [PaginationMetaDataComponent],
})
export class SharedPaginationMetaDataModule {}
