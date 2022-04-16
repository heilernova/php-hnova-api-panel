import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-hnova-api-panel';
  indexPage:number = 0;
  
  constructor(
    private _user:UserService
  ){
    let index:string|null = localStorage.getItem('nv-panel-index-page');
    
    if (index){
      this.indexPage = JSON.parse(index);
    }

    if (this._user.isLoggedIn()){
      this._user.authenticate();
    }
  }

  selectPage(index:number){
    this.indexPage = index;
    localStorage.setItem('nv-panel-index-page', JSON.stringify(index));
  }
}
