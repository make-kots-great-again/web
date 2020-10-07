import {Component, OnInit, OnDestroy, HostListener} from '@angular/core';
import {ReplaySubject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {UserService} from "../../../core/services/user.service";
import {User} from "../../../shared/models/user";

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

  constructor(
    private userService: UserService,
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
        response => console.log(response),
        error => console.log(error));
  }

  @HostListener('window:beforeunload')
  async ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
