import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDatabaseInfo } from '../interfaces/database-info';

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

  updateDb(name:string, data:IDatabaseInfo):Observable<true>{
    return this._http.put<true>(`db/${name}`, JSON.stringify(data));
  }

  deleteDb(name:string):Observable<true>{
    return this._http.delete<true>(`db/${name}`);
  }

  insertDb(data:IDatabaseInfo):Observable<true>{
    return this._http.post<true>(`db`, JSON.stringify(data));
  }

  testConnection(data:IDatabaseInfo):Observable<boolean>{
    return this._http.post<boolean>('db/test-connection', JSON.stringify(data));
  }
  databaseChange(name:string, dataConnection:any):Observable<boolean>{
    return this._http.put<boolean>(`db/${name}`, JSON.stringify(dataConnection));
  }

  tableInfo(db:string, table:string):Observable<any>{
    return this._http.get<any>(`db/${db}/table-info/${table}`);
  }
}
