import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-errors-dlg-trace',
  templateUrl: './errors-dlg-trace.component.html',
  styleUrls: ['./errors-dlg-trace.component.scss']
})
export class ErrorsDlgTraceComponent implements OnInit {

  listTrace:any[] = [];

  constructor(
    private _matDialogRef:MatDialogRef<ErrorsDlgTraceComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any[]
  ) { 
        
    this.data.forEach(element=>{
      let item:{title:string, content:string|string[]}[] = [];
      for (let clave in element){
        item.push({title:clave, content: element[clave]});
      }
      this.listTrace.push(item);
    });

  }

  ngOnInit(): void {
  }

}
