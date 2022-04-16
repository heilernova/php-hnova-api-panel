import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigComponent } from './config.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    ConfigComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    ConfigComponent
  ]
})
export class ConfigModule { }
