import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {IUser} from "../../shared/models/user.model";

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }

  getMyGroups(): Observable<HttpResponse<any>> {

    return this.http.get<any>('/server/api/user/groups',
      {observe: 'response'});

  }
}
