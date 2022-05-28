import { Injectable } from '@angular/core';
import { IDatabaseInfo } from '../Pages/databases/interfaces/database-info';
import { IRouteInfo } from '../Pages/routes/interfaces/route-info';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  databases:IDatabaseInfo[] = [];
  routes:IRouteInfo[] = [];
  constructor() { }
}
