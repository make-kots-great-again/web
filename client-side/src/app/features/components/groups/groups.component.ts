import {Component, HostListener, OnInit} from '@angular/core';
import {GroupService} from '../../../core/services/group.service';
import {ReplaySubject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {AuthenticationService} from '../../../core/services/authentification.service';
import {Group} from '../../../shared/models/group.model';
import {User} from '../../../shared/models/user.model';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  groups: Array<Group>;
  filterGroups = '';
  groupName = '';
  groupId = '';
  groupDescription = '';
  groupUsers: Array<User> = [];

  constructor(private groupService: GroupService,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.getGroups();
  }

  getGroups(): void {
    this.groupService.getMyGroups()
      .pipe(takeUntil(this.destroyed$))
      .subscribe(
        (data: any) => {
          this.groups = data;
        },
        error => {
          console.log(error);
        });
  }

  oncreateGroupSubmit(): void {
    const groupData: Group = {
      groupName: this.groupName,
      groupDescription: this.groupDescription
    };

    this.groupService.createGroup(groupData)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
          this.getGroups();
        },
        error => {
          console.log(error);
        });
  }

  onupdateGroupSubmit(): void {
    const groupData: Group = {
      groupName: this.groupName,
      groupDescription: this.groupDescription
    };

    this.groupService.updateGroup(this.groupId, groupData)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
          this.getGroups();
        },
        error => {
          console.log(error);
        });
  }

  leaveGroupClicked(groupId: any, groupName: any): void {
    this.groupId = groupId.id;
    this.groupName = groupName.id;
  }

  updateGroupClicked(groupId: any, groupName: any): void {
    this.groupId = groupId.id;
    this.groupName = groupName.id;
  }

  deleteGroupClicked(groupId: any, groupName: any): void {
    this.groupId = groupId.id;
    this.groupName = groupName.id;
  }

  onLeaveGroup(): void {
    const currentUser: any = this.authenticationService.currentUserValue;
    this.groupService.leaveGroup(this.groupId, currentUser.userId)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
          this.getGroups();
        },
        error => {
          console.log(error);
        });
  }

  ondeleteGroup(): void {
    this.groupService.deleteGroup(this.groupId)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
          this.getGroups();
        },
        error => {
          console.log(error);
        });
  }

  @HostListener('window:beforeunload')
  async ngOnDestroy(): Promise<any> {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
