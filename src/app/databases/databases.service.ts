import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDatabaseInf } from './interfaces/database-inf';

@Injectable({
  providedIn: 'root'
})
export class DatabasesService {

  constructor(
    private _http:HttpClient
  ) { }

  onGetDatabases():Observable<any>{
    return this._http.get<any>("http://localhost/php-hnova-api/www/nv-panel/databases");
  }
}
