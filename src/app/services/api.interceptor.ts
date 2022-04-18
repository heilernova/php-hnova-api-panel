import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MessageBoxService } from 'ng-nova';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(
    private _messageBox:MessageBoxService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    let url:string = request.url;
    
    if (environment.apiURL){
      if (!url.match(/^http(s)?:\/\/(.*)$/)){
        url = `${environment.apiURL}/${url}`;
      }
    }

    let requestClone:HttpRequest<unknown> = request.clone({url});
    
    return next.handle(requestClone).pipe(
      map((event:HttpEvent<any>)=>{
        if (event instanceof HttpResponse ){
          let nvDataString:string|null  = event.headers.get('nv-data');
          
          if (nvDataString){
            let nvData = JSON.parse(nvDataString);
            if (nvData.systemMessage){
              this._messageBox.show({content: nvData.systemMessage.content, buttonConfirmText: 'OK'});
            }
          }
          if (event.body == null){
            throw "Result null"
          }
        }
        return event;
      }),
      catchError((e:any)=>{
        
        if (e instanceof HttpErrorResponse){
          if (e.status == 0){
            this._messageBox.error({content: 'Error inesperado con la petición HTTP', buttonConfirmText: 'OK'});
          }else{
            
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
