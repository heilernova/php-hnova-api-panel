import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorsComponent } from './errors.component';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { ErrorsDlgTraceComponent } from './errors-dlg-trace/errors-dlg-trace.component';
import { MatDialogModule } from '@angular/material/dialog'
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input'


@NgModule({
  declarations: [
    ErrorsComponent,
    ErrorsDlgTraceComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule
  ],
  exports: [
    ErrorsComponent
  ]
})
export class ErrorsModule { }
