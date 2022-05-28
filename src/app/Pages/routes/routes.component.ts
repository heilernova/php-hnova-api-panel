import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IRouteInfo } from './interfaces/route-info';
import { ApiRoutesService } from './services/api-routes.service';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss']
})
export class RoutesComponent implements OnInit {

  constructor(
    private _api:ApiRoutesService,
    private _data:DataService
  ) { 
    this.loadRoutes();
  }

  ngOnInit(): void {
  }

  get routeList():IRouteInfo[]{
    return this._data.routes;
  }
  loadRoutes(): void {
    this._api.getAll().subscribe({
      next: res => {
        this._data.routes = res;
      }
    });
  }

}
