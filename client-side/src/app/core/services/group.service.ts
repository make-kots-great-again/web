import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {IUser} from "../../shared/models/user.model";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) {
  }

  getMyGroups(): Observable<HttpResponse<any>> {
    return this.http.get<any>('/server/api/user/groups',
      {observe: 'response'})
      .pipe(map((data: any) => data.body.userInfo[0].groups));

  }

  getOneGroup(id: string): Observable<HttpResponse<any>> {
    return this.http.get<any>(`/server/api/group/${id}`,
      {observe: 'response'})
      .pipe(map((data: any) => data.body.groupInfo));

  }

  createGroup(groupData: any): Observable<HttpResponse<any>> {
    return this.http.post<any>(`/server/api/group/create`, groupData,
      {observe: 'response'})
      .pipe(map((data: any) => data.body.group));

  }

  addMemberToGroup(groudId: string, username: string): Observable<HttpResponse<any>> {
    return this.http.get<any>(`/server/api/group/${groudId}/add/${username}`,
      {observe: 'response'})
      .pipe(map((data: any) => data.body));

  }

  searchProducts(productName: string): any {
    return this.http.get<Array<any>>(`/server/api/products/${productName}`,
      {observe: 'response'})
      .pipe(map((data: any) => data.body.products));

  }


}
