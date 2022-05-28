import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigComponent } from './config.component';
import { MatButtonModule } from '@angular/material/button';
import { ChangeCredentialsComponent } from './change-credentials/change-credentials.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ConfigComponent,
    ChangeCredentialsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports: [
    ConfigComponent
  ]
})
export class ConfigModule { }
