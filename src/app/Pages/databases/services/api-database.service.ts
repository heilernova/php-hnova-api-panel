import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiDatabaseService {

  constructor(
    private _http:HttpClient
  ) { }

  getDatabases():Observable<any[]>{
    return this._http.get<any[]>('db');
  }
}
