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

  isLogIn(){

    if(localStorage.getItem("id_token")){
      return true;
    }
    else{
      return false;
    }

  }

  logOut(){
    if(confirm("Voulez-vous vraiment vous déconnecter ?")){
      this.authService.logout();
    }
  }

}
