import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse,
  HttpHeaders
} from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MessageBoxService } from 'ng-nova';
import { UserService } from './user.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(
    private _messageBox:MessageBoxService,
    private _user:UserService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let url:string = request.url;
    let headers:undefined|HttpHeaders;
    
    if (!this._user.isLoggedIn() && url != 'auth'){
      throw "NO ACCESS";
    }

    if (environment.apiURL){
      if (!url.match(/^http(s)?:\/\/(.*)$/)){
        url = `${environment.apiURL}/${url}`;
      }
    }



    if (!(request.body instanceof  FormData)){
      headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'})
    }

    let requestClone:HttpRequest<unknown> = request.clone({url, headers});
    
    return next.handle(requestClone).pipe(
      map((event:HttpEvent<any>)=>{
        if (event instanceof HttpResponse ){
          let nvDataString:string|null  = event.headers.get('nv-data');
          if (nvDataString){
            let nvData = JSON.parse(nvDataString);
            if (nvData.message){
              this._messageBox.show({content: nvData.message.content, buttonConfirmText: 'OK'});
            }
          }
          if (event.body == null){
            throw "API REST : NULL"
          }
        }

        return event;
      }),
      catchError((e:any)=>{
        
        if (e instanceof HttpErrorResponse){
          if (e.status == 0){
            this._messageBox.error({content: 'Error inesperado con la petición HTTP', buttonConfirmText: 'OK'});
          }else{
            let nvDataString:string|null  = e.headers.get('nv-data');
            if (nvDataString){
              let nvData = JSON.parse(nvDataString);
              if (nvData.message){
                this._messageBox.show({content: nvData.message.content, buttonConfirmText: 'OK'});
              }
            }


            let text:string = "";
            if (typeof e.error == "object"){
              text  = e.error.text;
            }else{
              text = e.error;
            }
            this._messageBox.error({content: text, ngStyle:{'font-family': 'Cascadia Code'}, buttonConfirmText: 'OK'});
          }
        }else{
        }
        return throwError(()=>e);
      })
    );
    
  }
}
