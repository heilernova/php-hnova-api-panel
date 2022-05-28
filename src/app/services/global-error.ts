
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  
  handleError(error:any) {
    // your custom error handling logic
    console.log(error);
    // if (error instanceof HttpErrorResponse){
    //     console.log('Error con la peticion');
    // }
    // errro == "API REST : NULL"
  }
}