import {Component, OnInit, OnDestroy, HostListener} from '@angular/core';
import {ReplaySubject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {UserService} from "../../../core/services/user.service";
import {User} from "../../../shared/models/user.model";
import {Router} from "@angular/router";
import {addWarning} from "@angular-devkit/build-angular/src/utils/webpack-diagnostics";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  email: string;
  password: string;
  username: string;
  firstName: string;
  lastName: string;
  confirmPassword: string;

  alert: number = 0;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
  }

  ngOnInit(): void {

  }

  onRegisterSubmit(): void {
    const user: User = {
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      username: this.username,
      password: this.password
    };

    this.userService.registerUser(user)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(
        async (response: any) => {
          this.alert = response.status;
          setTimeout(() => this.router.navigate(['/login']) ,4000);
          console.log(response);
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
