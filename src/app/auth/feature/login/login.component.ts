import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { NzSegmentedOptions } from 'ng-zorro-antd/segmented';
import { tap } from 'rxjs';
import { login } from 'src/app/shared/data-access/auth/auth.actions';
import { authStatusSelector } from 'src/app/shared/data-access/auth/auth.selectors';
import { TranslationService } from 'src/app/shared/data-access/translation/translation.service';
import { AppState } from 'src/app/shared/interfaces/app-state.interface';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  form: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(8)]],
    remember: [false],
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

  ngOnInit(): void {}

  onSubmit(e: Event) {
    e.preventDefault();
    console.log(this.form);
    this.store.dispatch(login({ user: this.form.value }));
  }

  onLanguageChange(index: number) {
    this.translateService.setLanguageIndex(index);
  }
}
