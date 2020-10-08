import { UserService } from 'src/app/core/services/user.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class UserProfileResolve implements Resolve<any> {

    tempUserId = '79c32cb6-1f46-48bb-b914-6bab936f8cac'; //TODO récup après authentification

    constructor(private userService: UserService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        return this.userService.getUserById(this.tempUserId);
    }
}