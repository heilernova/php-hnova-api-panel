import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRouteInfo } from '../interfaces/route-info';

@Injectable({
  providedIn: 'root'
})
export class ApiRoutesService {

  constructor(
    private _http:HttpClient
  ) { }

  getAll():Observable<IRouteInfo[]>{
    return this._http.get<IRouteInfo[]>('routes');
  }
}
