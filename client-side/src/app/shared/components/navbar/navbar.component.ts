import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../core/services/authentification.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

  /**
   * Verify if the user is login or not
   * 
   * @returns true or false 
   */
  isLogIn(){

    if(localStorage.getItem("id_token")){
      return true;
    }
    else{
      return false;
    }

  }

  /** 
  * Send a confirmation window.
  * If the user valid the window, disconnect the user
  */
  logOut(){
    if(confirm("Voulez-vous vraiment vous déconnecter ?")){
      this.authService.logout();
    }
  }

}
