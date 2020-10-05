import {Component, OnInit} from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from "../../../core/services/auth.service";
import {Router} from "@angular/router";
import {ValidateService} from "../../../core/services/validate.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  token: any;
  userId: any;
  username: string = "";

  constructor(private validateService: ValidateService,
              private _flashMessagesService: FlashMessagesService,
              public authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {

    if (localStorage.getItem('user')) {
      this.authService.role = JSON.parse(localStorage.getItem('user')).role;
      this.authService.username =
        JSON.parse(localStorage.getItem('user')).username;
    }
  }


  onSelect() {
    this.authService.getProfile().subscribe(
      (profile: any) => {
        `${this.router.navigate(['/profile', profile.user.username])}`
      },
      err => {
        console.log(err);
        return false;
      }
    );
  }

  onLogOutClick() {

    if (!Object.keys(localStorage).includes('id_token')) {
      this.authService.logout();
      this._flashMessagesService.show("Please log in first", {
        cssClass: "alert-danger w-25",
        timeout: 2000
      });
      return false;
    } else {
      this.authService.logout();
      this._flashMessagesService.show("You are logged out", {
        cssClass: "alert-success w-25",
        timeout: 2000,
        navigate: `${this.router.navigate(['/login'])}`
      });
      return false;
    }
  }
}
