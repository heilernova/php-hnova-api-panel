import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatabasesComponent } from './databases.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { ViewScriptModule } from './components/view-script/view-script.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { FormDbConnectionModule } from './components/form-db-connection/form-db-connection.module';
import { DatabaseStructureModule } from './components/database-structure/database-structure.module';
import { MatMenuModule } from '@angular/material/menu';
import { DbInfoModule } from './components/db-info/db-info.module';

@NgModule({
  declarations: [
    DatabasesComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    ViewScriptModule,
    FormDbConnectionModule,
    DatabaseStructureModule,
    PipesModule,
    MatMenuModule,
    DbInfoModule
  ],
  exports: [
    DatabasesComponent
  ]
})
export class DatabasesModule { }
