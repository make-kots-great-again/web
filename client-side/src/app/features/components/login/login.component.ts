import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Router} from "@angular/router";
import {UserService} from "../../../core/services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  timeLoggedIn: number;
  isVerified: boolean;
  constructor(private formBuilder: FormBuilder,private userService: UserService, private router: Router) { }

  submitForm(): void {
    const user = {
      email: this.email,
      password: this.password
    };
    
    this.userService.loginUser(JSON.stringify(user)).toPromise()
    .then((data: any) => {
      this.timeLoggedIn = new Date().getTime();
    })
    .catch(err => {
      this.isVerified = err.error.isVerified;
      console.log(err);
    });
  }
  ngOnInit(): void {
  }

}
