import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../services/authentification.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add auth header with jwt if user is logged in and request is to api url
    const currentUser : any = this.authenticationService.currentUserValue;
    const isLoggedIn = currentUser && currentUser.token;
    const isApiUrl = request.url.startsWith('/server/api');
    console.log(currentUser)
    if (isLoggedIn && isApiUrl) {
      request = request.clone({
        setHeaders: {
          Authorization: currentUser.token
        }
      });
    }

    return next.handle(request);
  }
}
