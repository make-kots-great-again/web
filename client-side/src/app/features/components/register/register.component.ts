import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string;
  password: string;
  username: string;
  firstName: string;
  lastName: string;
  confirmPassword : string;

  constructor() { }

  ngOnInit(): void {
  }

  onRegisterSubmit() {

  }

}
