import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../../core/services/authentification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public authService: AuthenticationService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }


  async onLogOutClick() {

    this.authService.logout();
    await this.router.navigate(['/login']);
  //  setTimeout(() => this.router.navigate(['/login']) ,1000);

  }
}
