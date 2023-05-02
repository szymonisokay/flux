import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { RouterModule } from '@angular/router';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';
import { TranslateModule } from '@ngx-translate/core';
import { SharedLanguageSwitcherModule } from '../../../shared/feature/language-switcher/language-switcher.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzCheckboxModule,
    NzTypographyModule,
    NzGridModule,
    NzCardModule,
    NzAffixModule,
    NzSegmentedModule,
    TranslateModule,
    SharedLanguageSwitcherModule,
  ],
  declarations: [LoginComponent],
})
export class LoginModule {}
