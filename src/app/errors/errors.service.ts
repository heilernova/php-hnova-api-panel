import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {

  constructor(
    private _http:HttpClient
  ) { }

  onGetErrors():Observable<any[]>{
    return this._http.get<any[]>('errors');
  }
}
