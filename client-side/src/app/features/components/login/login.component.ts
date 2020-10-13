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


  pseudo : string;
  password : string;
  errorMessage: string;

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  alert: number = 0;

  constructor(private userService : UserService,
              private router : Router,
              private authService : AuthService
  ) { 
  } 

  ngOnInit(): void {
  }

  onLogin(f : NgForm){
    const data: Login = {
      pseudo : this.pseudo,
      password : this.password 
    };

    this.authService.login(data, this.router, this);
  }

  getDisplay(){
    if(this.errorMessage != ""){
      return 'bloc';
    }
    else{
      return 'none';
    }
  }

}
