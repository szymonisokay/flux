import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { AdvancedSearchModalComponent } from './advanced-search-modal.component';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { SharedSearchModule } from '../../../shared/ui/search/search.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    NzModalModule,
    NzButtonModule,
    NzInputModule,
    NzTypographyModule,
    NzSpaceModule,
    NzSelectModule,
    SharedSearchModule,
  ],
  declarations: [AdvancedSearchModalComponent],
  exports: [AdvancedSearchModalComponent],
})
export class AdvancedSearchModalModule {}
