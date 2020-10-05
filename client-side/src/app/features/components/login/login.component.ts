import {Component, Directive, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from "../../../core/services/auth.service";
import {Router} from "@angular/router";
import {ValidateService} from "../../../core/services/validate.service";
import {JwtHelperService} from "@auth0/angular-jwt";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  pseudo: String;
  password: String;
  timeLoggedIn: number;
  isVerified: boolean;

  //@ViewChild('loginform', { static: false }) loginForm : ElementRef;

  constructor(private validateService: ValidateService,
              private _flashMessagesService: FlashMessagesService,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {
      pseudo: this.pseudo,
      password: this.password
    };

    if (!this.validateService.validateLogin(user)) {

      this._flashMessagesService.show("Please fill in all fields", {
        cssClass: "alert-danger w-25",
        timeout: 2000,
        navigate: ''
      });

      return false;
    }

    this.authService.loginUser(JSON.stringify(user))
      .toPromise()
      .then((data: any) => {

          this.timeLoggedIn = new Date().getTime();
          this.sessionExpired(data.token);
          this.authService.storeUserData(data);
          this.authService.role = data.user.role;
          this.authService.username = data.user.username;
          this.authService.userId = data.user.userId;
          this.authService.userEmail = data.user.userEmail;
          this._flashMessagesService.show("You are now logged in ...", {
            cssClass: "alert-success w-25",
            timeout: 2000,
            navigate: `${this.router.navigate(['/dashboard'])}`
          });
        }
      )
      .catch(err => {
        this.isVerified = err.error.isVerified;
        console.log(err);
        if (Object.keys(err.error).includes("isVerified")) {
          this._flashMessagesService.grayOut(true);
          this._flashMessagesService.show(`${err.error.message}`, {
            cssClass: "alert-danger w-25",
            timeout: 10000
          });
        } else {
          this._flashMessagesService.show("Something went wrong", {
            cssClass: "alert-danger w-25",
            timeout: 3000
          });
        }
      });

  }

  sessionExpired(token: string) {
    const expirationDate = new JwtHelperService().getTokenExpirationDate(token).getTime();
    const sessionExpired = expirationDate - this.timeLoggedIn;
    setTimeout(() => {
      this.authService.logout();
      this._flashMessagesService
        .show("Your session is over, you can log in back in to start a new session.",
          {
            cssClass: "alert-danger text-center ",
            timeout: 10000,
            navigate: `${this.router.navigate(['/login'])}`
          });
    }, sessionExpired);
  }


  isAdmins() {
    return this.authService.role === 'admin';
  }

}
