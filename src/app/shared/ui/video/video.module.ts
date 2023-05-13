import { NgModule } from '@angular/core';

import { VideoComponent } from './video.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [VideoComponent],
  exports: [VideoComponent],
})
export class SharedVideoModule {}
