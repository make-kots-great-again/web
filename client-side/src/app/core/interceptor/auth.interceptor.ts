import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    httpRequest = httpRequest.clone({

      setHeaders: {
        'Authorization': `JWT`,
        'Content-Type': 'application/json'
      }
    });
    return next.handle(httpRequest);
  }
}
