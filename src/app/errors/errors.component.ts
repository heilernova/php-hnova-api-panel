import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorsDlgTraceComponent } from './errors-dlg-trace/errors-dlg-trace.component';
import { ErrorsService } from './errors.service';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss']
})
export class ErrorsComponent implements OnInit {

  listErrors:any[] = [];
  constructor(
    private _errors:ErrorsService,
    private _matDialog:MatDialog
  ) { 
    this.updateList();
  }

  ngOnInit(): void {
  }

  updateList(){
    this._errors.onGetErrors().subscribe({
      next: data=>{
        // console.log(data);
        this.listErrors = data.reverse();
        // console.log(data);
      },error:()=>{
        
      }
    });
  }

  getDevice(code:number):string{
    if (code == 1) return "Movil";
    else if (code == 2)  return "Tablet";
    else return "Computador"
  }


  showErrorTrace(trace:any[]){
    this._matDialog.open(ErrorsDlgTraceComponent, {data: trace});
  }
}
