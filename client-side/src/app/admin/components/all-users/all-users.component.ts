import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../core/services/auth.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {Router} from "@angular/router";

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  users: any[];
  email: string;
  username: string;
  usernames: string;
  password: string;

  confirmPassword: string;
  userId: string;
  alertMessage: string = "";

  searchValue: string = "";

  constructor(private authService: AuthService,
              private _flashMessagesService: FlashMessagesService,
              private router: Router
  ) {
  }

  ngOnInit() {

    if (!this.authService.getAllProfiles() ||
      (JSON.parse(localStorage.getItem('user')).role !== 'admin' &&
        JSON.parse(localStorage.getItem('user')).role !== 'teacher')) {
      this.authService.logout();
      return this._flashMessagesService.show("", {
        navigate: `${this.router.navigate(['/login'])}`
      });
    }

    this.authService.getAllProfiles()
      .toPromise()
      .then((data: any) => {
        this.users = data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  getUpdateId(event) {
    this.userId = event.name;
    this.usernames =  this.users.find(x => x._id === event.name).username;
  }

  getDeleteId(event) {
    this.userId = event.id;
  }

  onUpdateAllUser() {
    const user = {
      "username": this.username,
      "email": this.email,
      "password": this.password
    };

    this.authService.updateUser(this.userId, user)
      .toPromise()
      .then((data: any) => {
        this.ngOnInit();
        this.alertMessage = `${data.message}`;
      })
      .catch(err => {
        console.log(err);
        this.alertMessage = "Something went wrong !";
      });
    this.alertMessage = "";
  }

  onDeleteUser() {
    this.authService.deleteUser(this.userId)
      .toPromise()
      .then((data: any) => {
        this.ngOnInit();
        this.alertMessage = `${data.message}`;
      })
      .catch(err => {
        console.log(err);
        this.alertMessage = "Something went wrong !";
      });
    this.alertMessage = "";
  }
}
