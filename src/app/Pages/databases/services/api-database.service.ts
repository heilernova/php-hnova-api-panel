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

  databaseChange(name:string, dataConnection:any):Observable<boolean>{
    return this._http.put<boolean>(`db/${name}`, JSON.stringify(dataConnection));
  }

  tableInfo(db:string, table:string):Observable<any>{
    return this._http.get<any>(`db/${db}/table-info/${table}`);
  }
}
