import {Component, HostListener, OnInit} from '@angular/core';
import {Login} from '../../../shared/models/user.model';
import {Router} from "@angular/router";
import {takeUntil} from "rxjs/operators";
import {UserService} from "../../../core/services/user.service";
import {ReplaySubject} from "rxjs";
import {AuthenticationService} from "../../../core/services/authentification.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  /** pseudonyme ou email de l'utilisateur */
  pseudo: string;
  /** mot de passe de l'utilisateur */
  password: string;
  /** message d'erreur initialement vide */
  alert: number = 0;

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private router: Router,
              private authService: AuthenticationService,
              private userService: UserService) {
  }

  ngOnInit(): void {
  }

  /**
   * Récupère le contenu des données du formulaire de login.
   */

  onLoginSubmit(): void {
    const loginForm: Login = {
      pseudo: this.pseudo,
      password: this.password
    };
    this.authService.loginUser(loginForm)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(
        async (data: any) => {
          // this.userService.storeUserData(data);
          await this.router.navigate(['/profile']);
          // setTimeout(() => this.router.navigate(['/profile']), 1000);
          console.log(data);
        },
        error => {
          this.alert = error.status;
          console.log(error)
        });
  }

  @HostListener('window:beforeunload')
  async ngOnDestroy() {
    this.alert = 0;
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
