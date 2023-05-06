import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { NzTagModule } from 'ng-zorro-antd/tag';
import { AdvancedSearchTagsComponent } from './advanced-search-tags.component';

@NgModule({
  imports: [CommonModule, TranslateModule, NzTagModule],
  declarations: [AdvancedSearchTagsComponent],
  exports: [AdvancedSearchTagsComponent],
})
export class AdvancedSearchTagsModule {}
