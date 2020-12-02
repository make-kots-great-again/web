import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {IReserve} from '../../shared/models/reserve.model';
import {map, shareReplay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReserveService {

  constructor(private http: HttpClient) {}

  getGroupReserveItems(groupId: string): Observable<HttpResponse<IReserve>> {
    return this.http.get<IReserve>(`/server/api/reserve/items/${groupId}`, {observe: 'response'})
      .pipe(map((data: HttpResponse<any>) => data.body.reserveItems), shareReplay(1));
  }
  removeItemFromReserve(itemId: any): Observable<HttpResponse<any>> {
    
    return this.http.delete<any>(`/server/api/reserve/item/${itemId}`,{observe: 'response'})
      .pipe(map((data: any) => data.body.success));
  }
  addItemToReserve(itemId: any): Observable<HttpResponse<any>> {
    
    return this.http.patch<any>(`/server/api/reserve/item/${itemId}`,{observe: 'response'})
      .pipe(map((data: any) => data.body.success));
  }
  tempReserveItemUpdate(quantity:number, itemId: string){
    console.log(quantity);
  }

  reserveItemUpdate(quantity:number, expiringIn:number, itemId: string){
    console.log(quantity);
    console.log(expiringIn);
  }
}
