import {Component, OnInit} from '@angular/core';
import {ValidateService} from "../../../core/services/validate.service";
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from "../../../core/services/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string;
  password: string;
  username: string;
  confirmPassword : string;
  emailPattern : string = "/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/";

  constructor(private validateService: ValidateService,
              private _flashMessagesService: FlashMessagesService,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      username: this.username,
      email: this.email,
      password: this.password
    };

    if (!this.validateService.validateRegister(user)) {

      this._flashMessagesService.show("Please fill in all fields", {
        cssClass: "alert-danger w-25",
        timeout: 3000
      });
      return false;
    }

    // register
    this.authService.registerUser(JSON.stringify(user))
      .toPromise()
      .then((data : any) => {
          // console.log(data.success);
          this._flashMessagesService.show(
            `A verification email has been sent to ${data.user.userEmail}`, {
            cssClass: "alert-success w-50",
            timeout: 10000,
            navigate: `${this.router.navigate(['/login'])}`
          });
        }
      )
      .catch(err => {
        //console.log(err.error);
        console.log(err);
        this._flashMessagesService.show("Something went wrong", {
          cssClass: "alert-danger w-25",
          timeout: 3000,
          navigate: `${this.router.navigate(['/register'])}`
        });
      });

  }
}
