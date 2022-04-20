import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TableInfoComponent } from './table-info.component';

@Injectable({
  providedIn: 'root'
})
export class TableInfoService {

  constructor(
    private _matDialog:MatDialog
  ) { }

  show(info:any):MatDialogRef<TableInfoComponent>{
    return this._matDialog.open(TableInfoComponent, {data: info, width: '100%'});
  }

}
