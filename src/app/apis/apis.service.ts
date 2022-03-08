import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(
    private http:HttpClient
  ) { }

  onGetApis():Observable<any>{
    return this.http.get('apis');
  }
}
