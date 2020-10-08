import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  viewMode = 'view';

  userPorfile: any;

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.userPorfile = this.route.snapshot.data.userprofile[0];
  }

  onEditUserProfile(): void {
    this.viewMode = 'edition';
  }

  onSaveUserProfile(): void {
    this.viewMode = 'view';
  }


}
