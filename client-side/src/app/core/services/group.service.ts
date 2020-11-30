import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {IGroup, IgroupMember} from '../../shared/models/group.model';
import {IProduct} from '../../shared/models/product.model';
import {map, shareReplay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) {
  }

  groups$ = this.http.get<IGroup>('/server/api/user/groups', {observe: 'response'})
    .pipe(map((data: any) => data.body.userInfo[0].groups), shareReplay(1));

  createGroup(groupData: IGroup): Observable<HttpResponse<IGroup>> {
    return this.http.post<IGroup>(`/server/api/group/create`, groupData, {observe: 'response'})
      .pipe(map((data: HttpResponse<any>) => data.body.group), shareReplay(1));
  }

  getMyGroups(): Observable<HttpResponse<IGroup>> {
    return this.http.get<IGroup>('/server/api/user/groups', {observe: 'response'})
      .pipe(map((data: HttpResponse<any>) => data.body.userInfo[0].groups), shareReplay(1));
  }

  getOneGroup(id: string): Observable<HttpResponse<IGroup>> {
    return this.http.get<IGroup>(`/server/api/group/${id}`, {observe: 'response'})
      .pipe(map((data: any) => data.body.groupInfo), shareReplay(1));
  }

  updateGroup(groudId: string, groupData: IGroup): Observable<HttpResponse<IGroup>> {
    return this.http.patch<IGroup>(`/server/api/group/${groudId}`, groupData, {observe: 'response'})
      .pipe(map((data: any) => data.body));
  }

  addMemberToGroup(groudId: string, username: string): Observable<HttpResponse<IgroupMember>> {
    return this.http.get<IgroupMember>(`/server/api/group/${groudId}/add/${username}`, {observe: 'response'})
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
    return this.http.get<Array<IProduct>>(`/server/api/products/${productName}`, {observe: 'response'})
      .pipe(map((data: any) => data.body.products));
  }

  getGroupShoppingList(groudId: string): Observable<HttpResponse<IProduct>> {
    return this.http.get<IProduct>(`/server/api/shoppingList/${groudId}`, {observe: 'response'})
      .pipe(map((data: any) => data.body.shoppingList), shareReplay(1));
  }

  addProduct(productInfo: IProduct, groudId: string): Observable<HttpResponse<IProduct>> {
    return this.http.post<IProduct>(`/server/api/shoppingList/addProduct/${groudId}`,
      productInfo, {observe: 'response'})
      .pipe(map((data: any) => data.body.shoppingList));
  }

  deleteProduct(productId: string): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`/server/api/shoppingList/removeProduct/${productId}`, {observe: 'response'})
      .pipe(map((data: any) => data.body.message));
  }

}
