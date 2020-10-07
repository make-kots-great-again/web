import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './userProfile.component.html',
  styleUrls: ['./userProfile.component.scss']
})
export class UserProfileComponent implements OnInit {

  viewMode = 'view';

  userPorfile: any;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.userPorfile = this.route.snapshot.data.userprofile[0];
  }

  onEditUserProfile() {
    this.viewMode = 'edition';
  }

  onSaveUserProfile() {
    this.viewMode = 'view';
  }

}
