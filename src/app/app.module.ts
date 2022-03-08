import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { DatabasesModule } from './databases/databases.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import { ApiInterceptor } from './http/api.interceptor';
import { ApisModule } from './apis/apis.module';
import { ConfigModule } from './config/config.module';
import { ErrorsModule } from './errors/errors.module';

import { LOCALE_ID } from '@angular/core';
import es from '@angular/common/locales/es-CO';
import { registerLocaleData } from '@angular/common';
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
    DatabasesModule,
    ApisModule,
    ConfigModule,
    ErrorsModule,
    MatTabsModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:ApiInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
