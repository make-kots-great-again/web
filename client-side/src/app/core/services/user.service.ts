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
    
    /*
    getUserById(id: string) {
        this.httpClient
            .get<any>(`/server/api/user/${id}`)
            .subscribe(
                (response) => {
                    this.user = response[0];
                },
                (error) => {
                    console.log('Erreur de chargement : ' + error);
                }
            );
    }*/
}
