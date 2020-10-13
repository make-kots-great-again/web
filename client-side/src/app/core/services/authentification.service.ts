import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {LoginData} from '../../shared/models/user.model';
import {LoginComponent} from '../../features/components/login/login.component';
import * as moment from "moment";
import {Router} from "@angular/router";




@Injectable({
    providedIn: 'root'
  })
export class AuthService {

    constructor(private http: HttpClient) {
    }

    /**
     * Utilise les données contenues dans le paramètre loginData pour se connecter au serveur
     * En cas de connection réussie, récupère la réponse du serveur et la transmet à {@link AuthService.setSession}
     * En cas d'échec de connection, affiche l'erreur sur le module setError passé en paramètre
     * 
     * @param loginData les données de connection sous la forme : { pseudo : this.pseudo, password : this.password }
     * @param router    un router typescript
     * @param setError  un module LoginComponent pour récupérer le message d'erreur
     */
    login(loginData : LoginData, router: Router, setError : LoginComponent){ 
        
      return this.http.post<LoginData>('http://localhost:8000/server/api/login', loginData, { observe: 'response'}).subscribe(async (response: any) => {
         
        this.setSession(response, router);

      },
      error => {
        // si la requête abouti, mais que les identifiants sont incorrects
        if(error.status == 401){
          
          setError.errorMessage = "Votre identifiant ou votre mot de passe est incorrect";
        
        }
        // si la requête n'a pas aboutie
        else{
          
          console.log(error)
          setError.errorMessage = "Erreur de connection";
        
        }
      });
    }

    /**
     * Récupère le Json Web Token dans le body d'une requête HTTP
     * Stocke le Json Web Token et sa durée d'expiration dans le localStorage
     * 
     * @param authResult  une réponse HTML
     * @param router      un router typescript
     */
    private setSession(authResult, router: Router) {
        
      const expiresAt = moment().add(authResult.expiresIn,'second');

      localStorage.setItem('id_token', authResult.body.token);
      localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
      router.navigate(["home"]);
    
    }

    /**
     * Retire le Json Web Token et son temps d'expiration du localStorage
     */
    logout() {
      localStorage.removeItem("id_token");
      localStorage.removeItem("expires_at");
    }


}