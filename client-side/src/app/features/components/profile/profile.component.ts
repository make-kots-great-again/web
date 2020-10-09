import { UserService } from 'src/app/core/services/user.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  viewMode = 'view';

  tempUserId = '79c32cb6-1f46-48bb-b914-6bab936f8cac'; //TODO récup après authentification

  userProfile: any;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.userService.getUserById(this.tempUserId).subscribe((user: User) => {
            this.userProfile = user[0];
    });
  }

  onEditUserProfile(): void {
    this.viewMode = 'edition';
  }

  onSaveUserProfile(): void {
    this.viewMode = 'view';
  }

  ngOnDestroy() {
  }

}
