import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
  animations:[
    trigger('openClose', [
      // ...
      state('open', style({
        // height: '200px',
        opacity: 1,
        transform: 'scale(1.3)'
      })),
      state('closed', style({
        // height: '100px',
        opacity: 1,
        transform: 'scale(1.0)'
      })),
      transition('open => closed', [
        animate('0.3s')
      ]),
      transition('closed => open', [
        animate('0.3s')
      ]),
    ]),
  ]
})
export class FormLoginComponent implements OnInit {

  isOpen = false;
  passwordHidden:boolean = true;

  constructor(
    private _matDialogRef:MatDialogRef<FormLoginComponent>
  ) { 
    
    this._matDialogRef.backdropClick().subscribe(d=>{
      
      if (!this.isOpen){
        this.isOpen = true;
        this._matDialogRef.addPanelClass('pn');
  
        setTimeout(() => {
          this.isOpen = false;
          this._matDialogRef.removePanelClass('pn');
        }, 500);
      }
    })

  }

  ngOnInit(): void {
  }

  send(){
    
  }

}
