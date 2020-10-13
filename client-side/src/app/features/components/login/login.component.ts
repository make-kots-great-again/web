import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Login} from '../../../shared/models/user.model';
import {UserService} from "../../../core/services/user.service";
import {AuthService} from "../../../core/services/authentification.service";
import {ReplaySubject} from 'rxjs';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  /** pseudonyme ou email de l'utilisateur */
  pseudo : string;
  /** mot de passe de l'utilisateur */
  password : string;
  /** message d'erreur initialement vide */
  errorMessage: string;

  alert: number = 0;

  constructor(private router : Router,
              private authService : AuthService
  ) { 
  } 

  ngOnInit(): void {
  }

  /**
   * Récupère le contenu des données du formulaire de login.
   * Passe les valeurs à la fonction {@link AuthService.login}
   * 
   * @param f le formulaire devant être traité
   */
  onLogin(f : NgForm){
    const data: Login = {
      pseudo : this.pseudo,
      password : this.password 
    };

    this.authService.login(data, this.router, this);
  }

  /**
   * Permet de savoir s'il faut ou non afficher le message d'erreur
   * 
   * @returns true si le message doit être affiché ou false aussi non 
   */
  getDisplay(){
    if(this.errorMessage != ""){
      return true;
    }
    return false;
  }

}
