import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormLoginComponent } from '../components/form-login/form-login.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _matDialog:MatDialog,
    private _http:HttpClient
  ) { }

  /**
   * Lanza un dialog para iniciar seción
   */
  authenticate(){
    this._matDialog.open(FormLoginComponent, {disableClose: true, backdropClass:'backdrop-login'});
  }

  /**
   * Verifica si esta logeado
   */
  isLoggedIn():boolean{
    return localStorage.getItem('nv-panel-access') ? true : false;
  }

  /**
   * Cierra la sesión
   */
  logaout():void{
    localStorage.removeItem('nv-panel-access');
  }

  login(token:string):void{
    localStorage.setItem('nv-panel-accessn', token);
  }
}
