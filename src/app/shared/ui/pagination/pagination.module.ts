import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { PaginationComponent } from './pagination.component';

@NgModule({
  imports: [CommonModule, TranslateModule, NzPaginationModule],
  declarations: [PaginationComponent],
  exports: [PaginationComponent],
})
export class SharedPaginationModule {}
