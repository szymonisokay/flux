import { NgModule } from '@angular/core';
import { LanguageSwitcherModule } from './feature/language-switcher/language-switcher.module';
import { TopbarModule } from './feature/topbar/topbar.module';
import { SidebarModule } from './feature/sidebar/sidebar.module';

@NgModule({
  imports: [LanguageSwitcherModule, TopbarModule, SidebarModule],
  exports: [LanguageSwitcherModule, TopbarModule, SidebarModule],
})
export class SharedModule {}
