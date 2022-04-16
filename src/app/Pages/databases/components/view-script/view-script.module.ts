import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewScriptComponent } from './view-script.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ViewScriptComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    PipesModule,
    MatButtonModule
  ]
})
export class ViewScriptModule { }
