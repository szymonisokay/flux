import { NgModule } from '@angular/core';
import { LanguageSwitcherModule } from './ui/language-switcher/language-switcher.module';

@NgModule({
  imports: [LanguageSwitcherModule],
  exports: [LanguageSwitcherModule],
})
export class SharedModule {}
