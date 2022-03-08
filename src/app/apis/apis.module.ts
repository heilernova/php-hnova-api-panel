import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApisComponent } from './apis.component';
import { MatExpansionModule } from '@angular/material/expansion';



@NgModule({
  declarations: [
    ApisComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule
  ],
  exports	: [
    ApisComponent
  ]
})
export class ApisModule { }
