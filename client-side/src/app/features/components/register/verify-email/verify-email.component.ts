import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {AuthService} from "../../../../core/services/auth.service";
import {catchError} from "rxjs/operators";

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  key: string = "";
  message: string = "";
  resendmessage: string = "";
  resendEmail: string = "";
  isVerified: boolean;

  constructor(private route: ActivatedRoute,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.key = this.route.snapshot.paramMap.get('key');
  }

  verifyEmail() {
    this.authService.confirmEmail(this.key)
      .toPromise()
      .then((data: any) => {
        this.isVerified = data.success;
        this.message = data.message;
      })
      .catch(err => {
        this.isVerified = err.error.success;
        this.message = err.error.message;
        console.log(err)
      });
  }

  resend(){

    this.authService.resendEmail(this.resendEmail)
      .toPromise()
      .then((data: any) => {
        console.log(data);
        this.resendmessage = data.message;
      })
      .catch(err => {
        this.resendmessage = err.error.message;
        console.log(err)
      });

  }

}
