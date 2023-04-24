import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';
import { TranslationService } from '../feature/language-switcher/data-access/translation.service';

@Injectable({ providedIn: 'root' })
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private toastr: ToastrService,
    private translationService: TranslationService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((error) => {
        this.toastr.error(
          this.translationService.translate(
            error.error.message
              ? `error.${error.error.message}`
              : 'error.httpServerError'
          )
        );
        throw error;
      })
    );
  }
}
