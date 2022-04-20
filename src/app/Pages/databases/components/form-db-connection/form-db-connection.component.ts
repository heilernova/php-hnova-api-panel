import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiDatabaseService } from '../../services/api-database.service';

@Component({
  selector: 'app-form-db-connection',
  templateUrl: './form-db-connection.component.html',
  styleUrls: ['./form-db-connection.component.scss']
})
export class FormDbConnectionComponent implements OnInit {

  form:FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) private _data:undefined|{ name:string, dataConnection:{hostaname:string, username:string, password:string, database:string}},
    private _apiDB:ApiDatabaseService,
    private _matDialogRef:MatDialogRef<FormDbConnectionComponent>
  ) {

    this.form = new FormGroup({
      hostname: new FormControl('localhost', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl(''),
      database: new FormControl('', Validators.required)
    });

    // console.log(this.form.touched);

    if (this._data){
      // console.log(this._data);
      this.form.setValue(this._data.dataConnection);
    }
  }

  ngOnInit(): void {
  }

  salve(){
    if (this._data){
      this._apiDB.databaseChange(this._data.name, this.form.value).subscribe({
        next:(value) => {
          if (value){
            this._matDialogRef.close(this.form.value);
          }
        },
      });
    }else{

    }
  }
}
