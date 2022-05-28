import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IDatabaseInfo } from '../../interfaces/database-info';
import { DbInfoComponent } from './db-info.component';

@Injectable({
  providedIn: 'root'
})
export class DbInfoService {

  constructor(
    private _matDialog:MatDialog
  ) { }

  show(){
    this._matDialog.open(DbInfoComponent);
  }

  edit(data:IDatabaseInfo): void {
    
    this._matDialog.open(DbInfoComponent, { data });
  }
}
