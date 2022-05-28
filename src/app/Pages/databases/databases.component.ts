import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import { DbInfoService } from './components/db-info/db-info.service';
import { FormDbConnectionComponent } from './components/form-db-connection/form-db-connection.component';
import { ViewScriptComponent } from './components/view-script/view-script.component';
import { IDatabaseInfo } from './interfaces/database-info';
import { ApiDatabaseService } from './services/api-database.service';

@Component({
  selector: 'app-databases',
  templateUrl: './databases.component.html',
  styleUrls: ['./databases.component.scss']
})
export class DatabasesComponent implements OnInit {

  get databases():IDatabaseInfo[] {
    return this._data.databases;
  }
  databaseIndex:number = -1;

  structureIndex:number = -1;
  constructor(
    private _apiDB:ApiDatabaseService,
    private _matDialog:MatDialog,
    private _dbInfo:DbInfoService,
    private _data:DataService
  ) { }

  ngOnInit(): void {
    this.loadDatabases();
  }

  loadDatabases(){
    this._apiDB.getDatabases().subscribe({
      next: data=>{
        this._data.databases = data;
      }
    });
  }

  insertDb(): void {
    this._dbInfo.show();
  }

  showDbInfo(db:IDatabaseInfo): void {
    this._dbInfo.edit(db);
  }

  deleteDatabase(name:string): void {
    this._apiDB.deleteDb(name).subscribe({
      next: ()=>{
        let index:number = this.databases.findIndex(x=>x.name == name);
        this.databases.splice(index, 1);
      }
    });
  }

  editDataConnection(dataBaseInfo:any){
    this._matDialog.open(FormDbConnectionComponent, { data: { name: dataBaseInfo.name, dataConnection: dataBaseInfo.dataConnection}})
    .afterClosed().subscribe(
      res=>{
        if (res){
          dataBaseInfo.dataConnection = res;
        }
      }
    );
  }

  showScript(string:string|undefined){
    this._matDialog.open(ViewScriptComponent, {data: string});
  }

}
