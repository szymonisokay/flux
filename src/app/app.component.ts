import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {
  defaultLanguages,
  TransalationLanguages,
} from './shared/interfaces/translate-languages.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private translateService: TranslateService) {
    this.translateService.addLangs(defaultLanguages);
    this.translateService.setDefaultLang(TransalationLanguages.EN);
  }
}
