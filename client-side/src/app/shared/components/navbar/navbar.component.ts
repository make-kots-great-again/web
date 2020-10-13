import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isLogIn(){

    if(localStorage.getItem("id_token")){
      return 'bloc';
    }
    else{
      return 'none';
    }

  }

  reverse(param : string){

    if(param == 'bloc'){
      return 'none';
    }
    else if(param == 'none'){
      return 'bloc';
    }
    else{
      return '';
    }
    
  }
}
