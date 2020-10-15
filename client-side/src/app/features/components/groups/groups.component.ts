import {Component, HostListener, OnInit} from '@angular/core';
import {GroupService} from '../../../core/services/group.service'
import {ReplaySubject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  groups: any;
  searchValue: string = "";
  addUser: string = "";
  groupName: string = "";
  groupId: string = "";
  groupDescription: string = "";
  groupUsers: Array<any> = [];

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(
    private groupService: GroupService,
  ) {
  }

  ngOnInit(): void {
    this.getGroups();
  }

  getGroups(): void {
    this.groupService.getMyGroups()
      .pipe(takeUntil(this.destroyed$))
      .subscribe(
        (data: any) => {
          this.groups = data
        },
        error => {
          console.log(error)
        });
  }

  clickedGroupId(event: any): void {
     this.groupId = event.id;
     this.groupDetails();
  }

  groupDetails() {
    this.groupService.getOneGroup(this.groupId)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(
        (data: any) => {
          this.groupDescription = data.groupDescription;
          this.groupUsers = data.users;
        },
        error => {
          console.log(error)
        });
  }

  oncreateGroupSubmit() {
    const groupData = {
      groupName: this.groupName,
      groupDescription: this.groupDescription
    }

    this.groupService.createGroup(groupData)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(
        (data: any) => {
          this.getGroups();
        },
        error => {
          console.log(error)
        });
  }

  addUserToGroup() {
    const groupId = this.groupId;
    const username = this.addUser;

    this.groupService.addMemberToGroup(groupId, username)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(
        (data: any) => {
          this.groupDetails();
        },
        error => {
          console.log(error)
        });
  }

  @HostListener('window:beforeunload')
  async ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
