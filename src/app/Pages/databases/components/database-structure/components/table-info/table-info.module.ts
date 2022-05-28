import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableInfoComponent } from './table-info.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { PageCodeModule } from 'src/app/components/page-code/page-code.module';



@NgModule({
  declarations: [
    TableInfoComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    PipesModule,
    PageCodeModule
  ]
})
export class TableInfoModule { }
