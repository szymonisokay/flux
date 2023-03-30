import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { defaultLanguages } from '../../interfaces/translate-languages.interface';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  currentLang$ = new BehaviorSubject<number>(this.getLanguageFromStorage());

  constructor(private translateService: TranslateService) {}

  getLanguageFromStorage() {
    const languageIndex = localStorage.getItem('languageIndex');

    return Number(languageIndex) || 0;
  }

  setLanguageIndex(index: number) {
    this.currentLang$.next(index);
  }

  setlanguage(index: number) {
    this.saveLanguageIndexToStorage(index);
    this.translateService.use(this.getLanguage(index));
  }

  translate(translationString: string): string {
    return this.translateService.instant(translationString);
  }

  translateAsync(translationString: string): Observable<string> {
    return this.translateService.stream(translationString);
  }

  private saveLanguageIndexToStorage(index: number) {
    localStorage.setItem('languageIndex', index.toString());
  }

  private getLanguage(index: number): string {
    return defaultLanguages[index];
  }
}
