import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {

  constructor(
    private _http:HttpClient
  ) { }

  changeCredentials(data:{username:string, password:string}):Observable<true>{
    return this._http.put<true>('auth', JSON.stringify(data));
  }
}
