import { Component, OnInit } from '@angular/core';
import { IDatabaseInf } from './interfaces/database-inf';

@Component({
  selector: 'app-databases',
  templateUrl: './databases.component.html',
  styleUrls: ['./databases.component.scss']
})
export class DatabasesComponent implements OnInit {

  listDatabases:IDatabaseInf[] = [];
  constructor() {
    this.listDatabases = [
      { 
        type:'mysql',
        dataConnection:{
          hostname: 'localhost',
          username: 'root',
          password: '',
          database: 'test'
        }
      }
    ]
  }

  ngOnInit(): void {

  }

}
