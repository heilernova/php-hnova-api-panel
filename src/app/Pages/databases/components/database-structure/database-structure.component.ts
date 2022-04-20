import { Component, Input, OnInit } from '@angular/core';
import { ApiDatabaseService } from '../../services/api-database.service';
import { TableInfoService } from './components/table-info/table-info.service';

@Component({
  selector: 'app-database-structure',
  templateUrl: './database-structure.component.html',
  styleUrls: ['./database-structure.component.scss']
})
export class DatabaseStructureComponent implements OnInit {

  @Input() structure:any;
  @Input() database:any;

  tabs:string[] = ['Tablas', 'Vistas', 'Funciones', 'Procedimientos'];
  tabIndex:number = -1;
  tabContent:any[] = [];

  constructor(
    private _apiDB:ApiDatabaseService,
    private _tableInfo:TableInfoService
  ) { }

  ngOnInit(): void {
  }

  selectTab(index:number):void{
    this.tabIndex = index;
    if (index == 0){
      this.tabContent = this.structure.tables;
    }else if (index == 1){
      this.tabContent = this.structure.views;
    }else if (index == 2){
      this.tabContent =  this.structure.funcitons;
    }else if (index == 3){
      this.tabContent =  this.structure.procedures;
    }
  }

  showTableInfo(tableInfo:any):void{
    if (!tableInfo.info){

      this._apiDB.tableInfo(this.database.name, tableInfo.name).subscribe({
        next: (res)=>{
          tableInfo.info = res;
          this._tableInfo.show(tableInfo);
        }
      })
    }else{
      this._tableInfo.show(tableInfo);
    }
  }

}
