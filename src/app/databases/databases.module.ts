import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatabasesComponent } from './databases.component';



@NgModule({
  declarations: [
    DatabasesComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DatabasesComponent
  ]
})
export class DatabasesModule { }
