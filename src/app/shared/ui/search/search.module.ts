import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SearchComponent } from './search.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    NzInputModule,
    NzIconModule,
    NzButtonModule,
  ],
  declarations: [SearchComponent],
  exports: [SearchComponent],
})
export class SharedSearchModule {}
