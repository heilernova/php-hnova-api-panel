import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatabasesComponent } from './databases.component';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    DatabasesComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule
  ],
  exports: [
    DatabasesComponent,
    
  ]
})
export class DatabasesModule { }
