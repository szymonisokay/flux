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
import { RegisterModule } from './auth/feature/register/register.module';
import { RegisterRoutingModule } from './auth/feature/register/register-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { ToastrModule } from 'ngx-toastr';
import { ErrorInterceptor } from './shared/interceptors/error.interceptor';
import { appInit } from './shared/data-access/app-init/app-init';
import { TokenInterceptor } from './shared/interceptors/token.interceptor';
import { DashboardModule } from './dashboard/feature/dashboard/dashboard.module';
import { DashboardRoutingModule } from './dashboard/feature/dashboard/dashboard-routing.module';
import { appEffects, appReducers } from './shared/data-access/ngrx-global';
import { ExercisesModule } from './exercises/feature/exercises/exercises.module';
import { ExercisesRoutingModule } from './exercises/feature/exercises/exercises-routing.module';
import { SharedTopbarModule } from './shared/feature/topbar/topbar.module';
import { SharedSidebarModule } from './shared/feature/sidebar/sidebar.module';
import { ExerciseModule } from './exercises/feature/exercise/exercise.module';
import { ExerciseRoutingModule } from './exercises/feature/exercise/exercise-routing.module';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(appEffects),
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
    SharedTopbarModule,
    SharedSidebarModule,
    LoginModule,
    LoginRoutingModule,
    RegisterModule,
    RegisterRoutingModule,
    DashboardModule,
    DashboardRoutingModule,
    ExercisesModule,
    ExercisesRoutingModule,
    ExerciseModule,
    ExerciseRoutingModule,
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
