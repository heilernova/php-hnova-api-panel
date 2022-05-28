import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChangeCredentialsComponent } from './change-credentials/change-credentials.component';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  constructor(
    private _matDialog:MatDialog
  ) { }

  ngOnInit(): void {
  }

  change(): void {
    this._matDialog.open(ChangeCredentialsComponent);
  }

}
