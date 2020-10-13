import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {LoginData} from '../../shared/models/user.model';
import {LoginComponent} from '../../features/components/login/login.component';
import * as moment from "moment";
import {Router} from "@angular/router";
import { Observable } from 'rxjs';




@Injectable({
    providedIn: 'root'
  })
export class AuthService {

    constructor(private http: HttpClient) {
    }
      
    login(loginData : LoginData, router: Router, setError : LoginComponent){ 
        return this.http.post<LoginData>('http://localhost:8000/server/api/login', loginData, { observe: 'response'}).subscribe(async (response: any) => {
            this.setSession(response, router);
          },
          error => {
            if(error.status == 401){
              setError.errorMessage = "Connection refused";
            }
            else{
              console.log(error)
              setError.errorMessage = "Connection error";
            }

          });
    }

    private setSession(authResult, router: Router) {
        const expiresAt = moment().add(authResult.expiresIn,'second');

        localStorage.setItem('id_token', authResult.body.token);
        localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
        router.navigate(["home"]);
    }

}