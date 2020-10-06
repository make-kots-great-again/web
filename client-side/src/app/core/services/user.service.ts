import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

    private user = {};

    constructor(private httpClient: HttpClient) {}

    getUserById(id: string): Observable<any> {
        return this.httpClient.get<any>(`/server/api/user/${id}`);
    }
}
