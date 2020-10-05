import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";

const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  constructor(private _http: HttpClient) {
  }

  registerUser(user: any) : Observable<any> {
    return this._http.post('/server/api/signup', user, {headers});
  }
}
