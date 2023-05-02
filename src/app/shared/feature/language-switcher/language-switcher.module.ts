import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageSwitcherComponent } from './language-switcher.component';
import { TranslateModule } from '@ngx-translate/core';

import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [LanguageSwitcherComponent],
  imports: [
    FormsModule,
    CommonModule,
    TranslateModule,
    NzAffixModule,
    NzSegmentedModule,
    NzIconModule,
  ],
  exports: [LanguageSwitcherComponent],
})
export class SharedLanguageSwitcherModule {}
