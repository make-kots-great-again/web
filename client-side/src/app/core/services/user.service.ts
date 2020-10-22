
import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse } from '@angular/common/http';
import {Observable } from 'rxjs';
import {IUser, User } from '../../shared/models/user.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) {
  }

  registerUser(user: IUser): Observable<HttpResponse<IUser>> {

    return this.http.post<IUser>('/server/api/signup', user, {observe: 'response'});

  }

  getAllUsers(): Observable<HttpResponse<IUser>> {
    return this.http.get<IUser>('/server/api/users/profiles',
      {observe: 'response'});
  }

  /**
   * Fonction exécutant une requête auprès de notre API afin de récupérer
   * les informations d'un utilisateur par le biais de son identifiant.
   * @param id  : l'identifant de l'utilisateur.
   * @returns un observable http
   */
  getUserById(): Observable<User> {
    return this.http.get<User>(`/server/api/user`);
  }

  /**
   * Fonction exécutant une requête auprès de notre API afin de
   * mettre à jour sont profil.
   * @param id  : l'identifiant de l'utilisateur.
   * @param user : objet utilisateur contenant tous les champs de celui-ci.
   * @returns un observable http
   */
  putUser(user: any): Observable<HttpResponse<IUser>> {
    return this.http.put<IUser>(`/server/api/user`, user, { observe: 'response' });
  }

  /**
   * Fonction exécutant une requête auprès de notre API afin de
   * mettre à jour le mot de passe de l'utilisateur.
   * @param id  : l'identifiant de l'utilisateur.
   * @param passwords : structure de données contant:
   *                        - le mot de passe actuel de l'utilisateur
   *                        - le nouveau mot de passe de l'utilisateur
   * @returns un observable http
   */
  patchUserPwd(passwords: any): Observable<HttpResponse<IUser>> {
    return this.http.patch<IUser>(`/server/api/user/password`, passwords, { observe: 'response' });
  }

  searchUsername(username: string): any {
    return this.http.get<Array<any>>(`/server/api/user/${username}`, {observe: 'response'})
      .pipe(map((data: any) => data.body));
  }

}


