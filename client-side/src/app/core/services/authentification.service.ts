import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {LoginData} from '../../shared/models/user.model';
import * as moment from "moment";



@Injectable({
    providedIn: 'root'
  })
export class AuthService {

    constructor(private http: HttpClient) {
    }
      
    login(loginData : LoginData){ 
        return this.http.post<LoginData>('http://localhost:8000/server/api/login', loginData, { observe: 'response'}).subscribe(async (response: any) => {
            this.setSession(response)
   
          },
          error => {
            console.log(error)
          });
    }

    private setSession(authResult) {
        console.log("reçu")
        const expiresAt = moment().add(authResult.expiresIn,'second');

        localStorage.setItem('id_token', authResult.body.token);
        localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );


        console.log(localStorage.getItem('id_token'));
    }

    validateLogin(){

      this.http.request('GET','http://localhost:8000/server/api/users/profiles').subscribe(async (response: any) => {
        this.setSession(response)
        console.log(response);
      },
      error => {
        console.log(error)
      });
    }
}