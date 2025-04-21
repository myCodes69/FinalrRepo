import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable(
  {
    providedIn:'root'
  }
)
export class ReqsInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.headers.get('skip') === 'true')
    {
      console.log('Interceptor skipped for this request');
      return next.handle(request)
      
    }
    else{
      console.log('Interceptor executed');
      
      return next.handle(request);

    }
  }
}
