import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getEndpoint } from '../../utils/endpoints/endpoints.config';
import {
  UserLoginData,
  UserRegisterData,
  UserWithToken,
} from '../../interfaces/user.interface';
import { ResultModel } from '../../interfaces/result.interface';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { TranslationService } from '../translation/translation.service';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private translationService: TranslationService
  ) {}

  login(loginData: UserLoginData) {
    const endpoint = getEndpoint('login').path;

    return this.http
      .post<ResultModel<UserWithToken>>(endpoint, loginData)
      .pipe(
        tap((result) =>
          this.toastr.success(this.translationService.translate(result.message))
        )
      );
  }

  register(registerData: UserRegisterData) {
    const endpoint = getEndpoint('register').path;

    return this.http
      .post<ResultModel<UserWithToken>>(endpoint, registerData)
      .pipe(
        tap((result) =>
          this.toastr.success(this.translationService.translate(result.message))
        )
      );
  }
}
