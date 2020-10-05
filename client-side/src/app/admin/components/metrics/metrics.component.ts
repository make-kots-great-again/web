import {Component, OnInit} from '@angular/core';
import {FlashMessagesService} from "angular2-flash-messages";
import {AuthService} from "../../../core/services/auth.service";
import {Router} from "@angular/router";
import {FilterLogsPipe} from "../../../shared/pipes/filter-logs.pipe";

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css']
})
export class MetricsComponent implements OnInit {


  selectedValue: string = '';

  logInfo: Array<any>;
  searchValue: string = "";
  logsError: string = "";
  numberOflogs: number = 10;

  users: any;
  totalItems: number;
  page: number = 1;

  constructor(private _flashMessagesService: FlashMessagesService,
              private authService: AuthService,
              private filterLogs: FilterLogsPipe,
              private router: Router) {
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
    this.showUsersLogs();
  }

  showUsersLogs() {

    if(this.numberOflogs > this.totalItems || this.numberOflogs < 10){
      this.numberOflogs = this.totalItems;
    }

    this.authService.getLogs(
      (this.numberOflogs > this.totalItems) ?
        this.totalItems : this.numberOflogs)
      .toPromise()
      .then((data: Array<any>) => {

        this.totalItems = data.shift().totalLogs;

        data[0].forEach((x, i) => {
          x.date = new Date(x.date);
          x.logId = ++i;
        });

        this.users = [...data[0]];
      })
      .catch(err => this.logsError = err.error.error);
  }

  getMoreLogs() {
      this.numberOflogs += 10;
      this.showUsersLogs();
  }


  logDetails(event: any) {
    this.logInfo = this.users.find(x => x.requestId === event.id);
  }

  logsFilter(event: any) {
    this.selectedValue = event.value;
  }

  filterMethod(event: any) {
    (event.value === 'get') ? this.searchValue = 'GET' :
      (event.value === 'post') ? this.searchValue = 'POST' :
        (event.value === 'patch') ? this.searchValue = 'PATCH' :
          (event.value === 'delete') ? this.searchValue = 'DELETE' :
            undefined;

    this.totalItems = this.filterLogs.transform(this.users, event.value).length;
  }

  filterStatus(event: any) {
    (event.value === '200') ? this.searchValue = '200' :
      (event.value === '201') ? this.searchValue = '201' :
        (event.value === '400') ? this.searchValue = '400' :
          (event.value === '401') ? this.searchValue = '401' :
            (event.value === '404') ? this.searchValue = '404' :
              (event.value === '500') ? this.searchValue = '500' :
                undefined;

    this.totalItems = this.filterLogs.transform(this.users, event.value).length;
  }

  filterDisable(event: any) {
    (event.checked) ? this.searchValue = "" : undefined;
    this.totalItems = this.users.length;
  }

}
