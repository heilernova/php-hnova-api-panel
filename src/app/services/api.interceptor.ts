import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    let url:string = request.url;
    
    if (environment.apiURL){
      if (!url.match(/^http(s)?:\/\/(.*)$/)){
        url = `${environment.apiURL}/${url}`;
      }
    }

    let requestClone:HttpRequest<unknown> = request.clone({url});
    
    return next.handle(requestClone);
    
  }
}
