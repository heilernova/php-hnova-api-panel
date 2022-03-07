import { Component, OnInit } from '@angular/core';
import { DatabasesService } from './databases.service';
import { IDatabaseInf } from './interfaces/database-inf';

@Component({
  selector: 'app-databases',
  templateUrl: './databases.component.html',
  styleUrls: ['./databases.component.scss']
})
export class DatabasesComponent implements OnInit {

  listDatabases:IDatabaseInf[] = [];
  constructor(
    private _databases:DatabasesService
  ) {
    this._databases.onGetDatabases().subscribe({
      next: data=>{
        this.listDatabases = data;
        // console.log(data);
      },error:()=>{

      }
    })
  }

  ngOnInit(): void {

  }

}
