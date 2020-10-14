import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from "rxjs";
import {IUser, LoginData} from '../../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  registerUser(user: IUser): Observable<HttpResponse<IUser>> {

    return this.http.post<IUser>('/server/api/signup', user, {observe: 'response'});

  }

  getAllUser(): Observable<HttpResponse<IUser[]>> {

    return this.http.get<IUser[]>('/server/api/users/profiles',
      {observe: 'response'});

  }
}


