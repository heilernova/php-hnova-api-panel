import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import { IDatabaseInfo } from '../../interfaces/database-info';
import { ApiDatabaseService } from '../../services/api-database.service';

@Component({
  selector: 'app-db-info',
  templateUrl: './db-info.component.html',
  styleUrls: ['./db-info.component.scss']
})
export class DbInfoComponent implements OnInit {

  form:FormGroup;
  constructor(
    private _matDialogRef:MatDialogRef<DbInfoComponent>,
    @Inject(MAT_DIALOG_DATA) private _dbInfo:IDatabaseInfo|undefined,
    private _api:ApiDatabaseService,
    private _data:DataService
  ) { 

    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      type: new FormControl(null, Validators.required),
      dataConnection: new FormGroup({
        hostname: new FormControl('localhost', Validators.required),
        username: new FormControl('', Validators.required),
        password: new FormControl(''),
        database: new FormControl('', Validators.required)
      }),
      description: new FormControl('')
    });

    if (_dbInfo){
      console.log(_dbInfo);
      this.form.setValue(_dbInfo);
    }
  }

  ngOnInit(): void {
  }

  disableBottonTest():boolean{
    return (this.form.get('dataConnection') as FormControl).invalid
  }

  testConnection(): void {
    let data = this.form.value;

    this._api.testConnection(data).subscribe({
      next: res =>{

      }
    })
  }

  salve(): void {
    if (this._dbInfo){
      this._api.updateDb(this._dbInfo.name, this.form.value).subscribe({
        next: ()=>{
          if (this._dbInfo){
            let v:IDatabaseInfo = (this.form.value as IDatabaseInfo)
            this._dbInfo.name = v.name;
            this._dbInfo.type = v.type;
            this._dbInfo.dataConnection = v.dataConnection;
            this._dbInfo.description = v.description;
            this._matDialogRef.close();
          }
        }
      })
    }else{
      // Insertamos
      this._api.insertDb(this.form.value).subscribe({
        next: ()=>{
          this._data.databases.push(this.form.value);
          this._matDialogRef.close();
        }
      })
    }
  }

}
