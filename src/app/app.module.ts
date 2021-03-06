import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';

import { LOCALE_ID } from '@angular/core';
import es from '@angular/common/locales/es-CO';
import { registerLocaleData } from '@angular/common';
import { ApiInterceptor } from './services/api.interceptor';
import { DatabasesModule } from './Pages/databases/databases.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfigModule } from './Pages/config/config.module';
import { FormLoginModule } from './components/form-login/form-login.module';
import { NovaModule } from 'ng-nova';
import { GlobalErrorHandler } from './services/global-error';
import { RoutesModule } from './Pages/routes/routes.module';
registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    MatTabsModule,
    DatabasesModule,
    MatDialogModule,
    ConfigModule,
    FormLoginModule,
    NovaModule,
    RoutesModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:ApiInterceptor, multi:true},
    {provide: ErrorHandler, useClass: GlobalErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
