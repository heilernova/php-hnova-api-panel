import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewScriptComponent } from './components/view-script/view-script.component';
import { ApiDatabaseService } from './services/api-database.service';

@Component({
  selector: 'app-databases',
  templateUrl: './databases.component.html',
  styleUrls: ['./databases.component.scss']
})
export class DatabasesComponent implements OnInit {

  databases:any[] = [];
  databaseIndex:number = -1;

  structureIndex:number = -1;

  constructor(
    private _apiDB:ApiDatabaseService,
    private _matDialog:MatDialog
  ) { }

  ngOnInit(): void {

    this.loadDatabases();
  }

  databaseSelect(index:number){
    this.databaseIndex = index;
  }

  selectStructureIndex(index:number){
    this.structureIndex = index;
  }

  loadDatabases(){
    this._apiDB.getDatabases().subscribe({
      next: data=>{
        this.databases = data;
        if (data.length > 0){
          this.databaseIndex = 0;
        }
      }
    });
  }

  showScript(string:string|undefined){
    this._matDialog.open(ViewScriptComponent, {data: string});
  }

}
