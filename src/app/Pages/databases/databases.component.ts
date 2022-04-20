import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormDbConnectionComponent } from './components/form-db-connection/form-db-connection.component';
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
  testCode:string = "";
  constructor(
    private _apiDB:ApiDatabaseService,
    private _matDialog:MatDialog
  ) { 
    this.testCode = "CREATE TABLE `tb_sac_cases` (\n  `id` int(11) NOT NULL AUTO_INCREMENT,\n  `date` datetime NOT NULL DEFAULT current_timestamp(),\n  `status` bit(1) NOT NULL DEFAULT b'1',\n  `user` int(11) NOT NULL,\n  `dni` varchar(15) NOT NULL,\n  `eps` int(11) NOT NULL,\n  `requiredAttention` int(11) NOT NULL,\n  `note` varchar(400) DEFAULT NULL,\n  `sisben` bit(1) DEFAULT NULL,\n  `regime` bit(1) DEFAULT NULL,\n  `olderAdult` bit(1) DEFAULT NULL,\n  `disabled` bit(1) DEFAULT NULL,\n  `pregnant` bit(1) DEFAULT NULL,\n  `womenHeadHousehold` bit(1) DEFAULT NULL,\n  `afrodescendent` bit(1) DEFAULT NULL,\n  `lgtbi` bit(1) DEFAULT NULL,\n  `victim` bit(1) DEFAULT NULL,\n  `displaced` bit(1) DEFAULT NULL,\n  `demobilized` bit(1) DEFAULT NULL,\n  `reinserted` bit(1) DEFAULT NULL,\n  `palenRaizal` bit(1) DEFAULT NULL,\n  `roomGintano` bit(1) DEFAULT NULL,\n  `nnaNunaccompaniedAdult` bit(1) DEFAULT NULL,\n  PRIMARY KEY (`id`),\n  KEY `index_user` (`user`),\n  KEY `index_attention` (`requiredAttention`),\n  KEY `index_eps` (`eps`),\n  CONSTRAINT `fk_sac_cases_eps` FOREIGN KEY (`eps`) REFERENCES `tb_eps` (`id`) ON UPDATE CASCADE,\n  CONSTRAINT `fk_sac_cases_required_attentions` FOREIGN KEY (`requiredAttention`) REFERENCES `tb_sac_cases_required_attentions` (`id`) ON UPDATE CASCADE,\n  CONSTRAINT `fk_sac_cases_users` FOREIGN KEY (`user`) REFERENCES `tb_users` (`id`) ON UPDATE CASCADE\n) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4";
    // console.log(this.testCode);
  }

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
