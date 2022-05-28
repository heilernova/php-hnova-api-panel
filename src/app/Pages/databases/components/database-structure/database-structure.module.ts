import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatabaseStructureComponent } from './database-structure.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TableInfoModule } from './components/table-info/table-info.module';


@NgModule({
  declarations: [
    DatabaseStructureComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    TableInfoModule
  ],
  exports:[
    DatabaseStructureComponent
  ]
})
export class DatabaseStructureModule { }
