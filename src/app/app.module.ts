import { APP_INITIALIZER, NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LoginModule } from './auth/feature/login/login.module';
import { LoginRoutingModule } from './auth/feature/login/login-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SharedModule } from './shared/shared.module';
import { RegisterModule } from './auth/feature/register/register.module';
import { RegisterRoutingModule } from './auth/feature/register/register-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './shared/data-access/auth/auth.effects';
import { ToastrModule } from 'ngx-toastr';
import { ErrorInterceptor } from './shared/interceptors/error.interceptor';
import { appInit } from './shared/data-access/app-init/app-init';
import { TokenInterceptor } from './shared/interceptors/token.interceptor';
import { DashboardModule } from './dashboard/feature/dashboard/dashboard.module';
import { DashboardRoutingModule } from './dashboard/feature/dashboard/dashboard-routing.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot(AuthEffects),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpsTranslateLoader,
        deps: [HttpClient],
      },
    }),
    ToastrModule.forRoot({
      preventDuplicates: true,
      positionClass: 'toast-top-right',
      timeOut: 3000,
      tapToDismiss: true,
      progressBar: true,
      progressAnimation: 'decreasing',
    }),
    NzLayoutModule,
    NzDrawerModule,
    SharedModule,
    LoginModule,
    LoginRoutingModule,
    RegisterModule,
    RegisterRoutingModule,
    DashboardModule,
    DashboardRoutingModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    {
      provide: APP_INITIALIZER,
      useFactory: appInit,
      deps: [Store],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function httpsTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
