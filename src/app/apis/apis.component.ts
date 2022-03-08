import { Component, OnInit } from '@angular/core';
import { ApisService } from './apis.service';

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.scss']
})
export class ApisComponent implements OnInit {

  listApis:any[] = [];
  constructor(
    private _apis:ApisService
  ) { 
    this._apis.onGetApis().subscribe({
      next:data=>{
        this.listApis = data;
      },error:()=>{
        
      }
    });
  }

  ngOnInit(): void {
  }

}
