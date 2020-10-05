import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../core/services/auth.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor(private authService: AuthService,
              private _flashMessagesService: FlashMessagesService,
              private router: Router
  ) {
  }

  ngOnInit() {
    if (this.authService.getProfile() === undefined) {
        this.authService.logout();
      return this._flashMessagesService.show("You need to log in !", {
        cssClass: "alert-danger w-50 p-3",
        timeout: 2000,
        navigate: `${this.router.navigate(['/login'])}`
      });
    }
  }


}
