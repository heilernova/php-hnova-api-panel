import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageCodeComponent } from './page-code.component';
import { PipesModule } from 'src/app/pipes/pipes.module';



@NgModule({
  declarations: [
    PageCodeComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [
    PageCodeComponent
  ]
})
export class PageCodeModule { }
