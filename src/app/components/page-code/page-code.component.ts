import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-page-code',
  templateUrl: './page-code.component.html',
  styleUrls: ['./page-code.component.scss']
})
export class PageCodeComponent implements OnInit, OnChanges  {

  @Input() codeText:string  = '';
  @Input() codeLanguage:'MYSQL' | 'PHP' = 'MYSQL';

  codeLines:string[] = [];

  constructor() { 

    // Separamos el codigo en array por lineas


    // let code:string = this.codeText;

    // let d:string[] = code.split(/\n/gi);
    

    // let linesTempo:string[] = [];

    // d.forEach(line =>{
    //   let chars = line.match(/.{1}/g);
    //   let lineTempo:string = "";
    //   let textStart:boolean = false;
    //   chars?.forEach(char=>{
        
    //     if (char == '`'){
    //       if (textStart){
    //         textStart = false;
    //         lineTempo += '`</span>';
    //       }else{
    //         textStart = true;
    //         lineTempo += '<span style="color:brown; font-weight: 400;">`';
    //       }
    //     }else{
    //       lineTempo += char;
    //     }
    //   })
    //   linesTempo.push(lineTempo.replace(/  /g, '&nbsp;&nbsp;&nbsp;&nbsp;'));

    // });
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
  }

  ngOnInit(): void {

    let lines:string[] = this.codeText.split(/\n/gi);
    // console.log(lines);
    
    this.codeLines = lines.map<string>(value =>{
      
      
      let textStart:boolean = false;
      let lineTempo:string = "";
      let parenthesisStart:boolean = false;
      let parenthesisEnd:boolean = false;
      let isNumber:boolean = false;

      value.match(/.{1}/g)?.forEach(char=>{
      
        if (char == '`' || char == "'"){
          if (textStart){
            textStart = false;
            lineTempo += char + '</span>';
          }else{
            textStart = true;

            lineTempo += `<span class="${char == "'" ? 'text-1' : 'text-2'}">${char}`;

          }
        }else if (char == ' '){
          lineTempo += "&nbsp;";
        }
        else{

          lineTempo += char;
        }
      });


      console.log(lineTempo.search(/\w[(]\d/))
      console.log(lineTempo.substring(lineTempo.search(/\w[(]\d/)));
      // return lineTempo.replace(/\w*[(]\d/, 'XX');
      return lineTempo.replace(/varchar/g, 'VARCHAR');

    });

   
  }
}
