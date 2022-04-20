import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDbConnectionComponent } from './form-db-connection.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormDbConnectionComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule
  ]
})
export class FormDbConnectionModule { }
