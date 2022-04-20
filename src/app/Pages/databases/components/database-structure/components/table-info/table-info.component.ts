import { trigger } from '@angular/animations';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-table-info',
  templateUrl: './table-info.component.html',
  styleUrls: ['./table-info.component.scss']
})
export class TableInfoComponent implements OnInit {

  tableName:string = "";
  index:number = 0;

  createCodeLines:string[] = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public tableInfo:any,
    private _matDialogRef:MatDialogRef<TableInfoComponent>
  ) { 

    this.tableName = tableInfo.name ?? 'Sin nombre';

    let code:string = this.tableInfo.info.create;

    let d = code.split(/\n/gi);
    

    let linesTempo:string[] = [];

    d.forEach(line =>{
      let chars = line.match(/.{1}/g);
      let lineTempo:string = "";
      let textStart:boolean = false;
      chars?.forEach(char=>{
        
        if (char == '`'){
          if (textStart){
            textStart = false;
            lineTempo += '`</span>';
          }else{
            textStart = true;
            lineTempo += '<span style="color:brown; font-weight: 400;">`';
          }
        }else{
          lineTempo += char;
        }
      })
      linesTempo.push(lineTempo.replace(/  /g, '&nbsp;&nbsp;&nbsp;&nbsp;'));

    });
    // console.log(d[0].match(/.{1}/g));
    this.createCodeLines = linesTempo;
  }

  ngOnInit(): void {
  }

  selectIndex(index:number){
    this.index = index;
  }
}
