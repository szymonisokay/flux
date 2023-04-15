import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { login } from 'src/app/shared/data-access/auth/auth.actions';
import { authStatusSelector } from 'src/app/shared/data-access/auth/auth.selectors';
import { TranslationService } from 'src/app/shared/data-access/translation/translation.service';
import { AppState } from 'src/app/shared/interfaces/app-state.interface';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    rememberMe: [false],
  });

  status$ = this.store.select(authStatusSelector);

  currentLang$ = this.translateService.currentLang$.pipe(
    tap((index) => this.translateService.setlanguage(index))
  );

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private translateService: TranslationService
  ) {}

  onSubmit(e: Event) {
    e.preventDefault();
    if (this.loginForm.invalid) {
      Object.values(this.loginForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });

      return;
    }

    this.store.dispatch(login({ user: this.loginForm.value }));
  }

  onLanguageChange(index: number) {
    this.translateService.setLanguageIndex(index);
  }
}
