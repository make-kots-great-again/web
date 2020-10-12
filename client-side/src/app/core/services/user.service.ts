import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import {Observable} from "rxjs";
import {IUser, LoginData} from '../../shared/models/user.model';

//const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) {
  }

  registerUser(user: IUser): Observable<HttpResponse<IUser>> {
    return this.http.post<IUser>('/server/api/signup', user, { observe: 'response' });
  }

  connectUser(loginData : LoginData): Observable<HttpResponse<LoginData>> { 
    return this.http.post<LoginData>('/server/api/login', loginData, { observe: 'response'});
  }

}
