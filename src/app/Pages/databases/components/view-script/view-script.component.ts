import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-script',
  templateUrl: './view-script.component.html',
  styleUrls: ['./view-script.component.scss']
})
export class ViewScriptComponent implements OnInit {
  theHtmlString:string= "";
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public script:string
  ) {

    // this.theHtmlString= this.script.replace('CREATE TABLE', '<span>CREATE TABLE </span>')
    // .replace(/\r\n/gi,"<br>")
    // .replace(' `', '<span style="color:brown; font-weight: 400;">`')
    // .replace('`<br>', '`</span><br>')
    // .replace(/    /gi,"&nbsp;&nbsp;&nbsp;&nbsp;")
    // .replace(/&nbsp;`/gi, '<span style="color:brown; font-weight: 400;">`')
    // .replace(/` /gi, "`</span> ");

    this.theHtmlString= this.script
    .replace(/w*\b`/gi, '_yy')
    .replace(/`.`/gi, '_yy.xx_')
    .replace(/ `/gi, " xx_")
    .replace(/\r\n/gi,"<br>")
    .replace(/xx_/gi, '<span style="color:brown; font-weight: 400;">`')
    .replace(/[(]`/gi, '(<span style="color:brown; font-weight: 400;">`')
    .replace(/`[)]/gi, '`</span>)')
    .replace(/_yy/gi, '`</span>')
    .replace(/    /gi,"&nbsp;&nbsp;&nbsp;&nbsp;");

   }

  ngOnInit(): void {
  }

}
