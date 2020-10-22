import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {IGroup} from '../../shared/models/group.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) {
  }

  createGroup(groupData: IGroup): Observable<HttpResponse<IGroup>> {
    return this.http.post<IGroup>(`/server/api/group/create`, groupData, {observe: 'response'})
      .pipe(map((data: any) => data.body.group));
  }

  getMyGroups(): Observable<HttpResponse<IGroup>> {
    return this.http.get<IGroup>('/server/api/user/groups', {observe: 'response'})
      .pipe(map((data: any) => data.body.userInfo[0].groups));
  }

  getOneGroup(id: string): Observable<HttpResponse<IGroup>> {
    return this.http.get<IGroup>(`/server/api/group/${id}`, {observe: 'response'})
      .pipe(map((data: any) => data.body.groupInfo));
  }

  updateGroup(groudId: string, groupData: IGroup): Observable<HttpResponse<IGroup>> {
    return this.http.patch<IGroup>(`/server/api/group/${groudId}`, groupData, {observe: 'response'})
      .pipe(map((data: any) => data.body));
  }

  addMemberToGroup(groudId: string, username: string): Observable<HttpResponse<any>> {
    return this.http.get<any>(`/server/api/group/${groudId}/add/${username}`, {observe: 'response'})
      .pipe(map((data: any) => data.body));
  }


  leaveGroup(groudId: string, userId: string): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`/server/api/group/${groudId}/delete/${userId}`, {observe: 'response'})
      .pipe(map((data: any) => data.body));
  }

  deleteGroup(groudId: string): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`/server/api/group/${groudId}`, {observe: 'response'})
      .pipe(map((data: any) => data.body));
  }

  searchProducts(productName: string): any {
    return this.http.get<Array<any>>(`/server/api/products/${productName}`, {observe: 'response'})
      .pipe(map((data: any) => data.body.products));
  }


}
