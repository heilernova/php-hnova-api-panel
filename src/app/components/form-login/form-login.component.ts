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
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

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
  form:FormGroup;
  inputExternalURL = new FormControl();

  constructor(
    private _matDialogRef:MatDialogRef<FormLoginComponent>,
    private _http:HttpClient,
    private _user:UserService
  ) { 
    
    // Inicalizamor el form group
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });

    this._matDialogRef.backdropClick().subscribe(d=>{
      
      if (!this.isOpen){
        this.isOpen = true;
        this._matDialogRef.addPanelClass('pn');
  
        setTimeout(() => {
          this.isOpen = false;
          this._matDialogRef.removePanelClass('pn');
        }, 500);
      }
    });

  }

  ngOnInit(): void {
  }

  send(){

    this._http.post<string>('auth', JSON.stringify(this.form.value)).subscribe({
      next: (token:string)=>{
        this._user.login(token);
        this._matDialogRef.close();
      }
    });
  }

}
