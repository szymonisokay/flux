import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { login, register } from 'src/app/shared/data-access/auth/auth.actions';
import { authStatusSelector } from 'src/app/shared/data-access/auth/auth.selectors';
import { TranslationService } from 'src/app/shared/feature/language-switcher/data-access/translation.service';
import { AppState } from 'src/app/shared/interfaces/app-state.interface';

const passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;

@Component({
  selector: 'auth-register',
  templateUrl: './register.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  registerForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern(passwordPattern)]],
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

    if (this.registerForm.invalid) {
      Object.values(this.registerForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });

      return;
    }

    this.store.dispatch(register({ user: this.registerForm.value }));
  }

  onLanguageChange(index: number) {
    this.translateService.setLanguageIndex(index);
  }
}
