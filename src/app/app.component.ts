import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {
  defaultLanguages,
  TransalationLanguages,
} from './shared/interfaces/translate-languages.interface';
import { Store } from '@ngrx/store';
import { AppState } from './shared/interfaces/app-state.interface';
import { authUserSelector } from './shared/data-access/auth/auth.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  user$ = this.store.select(authUserSelector);

  constructor(
    private translateService: TranslateService,
    private store: Store<AppState>
  ) {
    this.translateService.addLangs(defaultLanguages);
    this.translateService.setDefaultLang(TransalationLanguages.EN);
  }
}
