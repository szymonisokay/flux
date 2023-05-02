import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TopbarComponent } from './topbar.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

@NgModule({
  imports: [
    CommonModule,
    NzButtonModule,
    NzIconModule,
    NzDropDownModule,
    NzAvatarModule,
  ],
  declarations: [TopbarComponent],
  exports: [TopbarComponent],
})
export class SharedTopbarModule {}
