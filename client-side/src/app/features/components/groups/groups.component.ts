import {ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, Input, OnInit} from '@angular/core';
import {GroupService} from '../../../core/services/group.service';
import {Observable, of, ReplaySubject} from 'rxjs';
import {catchError, defaultIfEmpty, takeUntil, tap} from 'rxjs/operators';
import {AuthenticationService} from '../../../core/services/authentification.service';
import {Group, IGroup} from '../../../shared/models/group.model';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupsComponent implements OnInit {

  //defaultIfEmpty(false),

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  groups: Array<Group>;
  filterGroups = '';
  groupName = '';
  groupId = '';
  groupDescription = '';

  groupsA$: Observable<Array<Group>> = this.groupService.groups$
    .pipe(
      catchError(error => {
        console.error(error);
        return of([]);
      }));

  constructor(private groupService: GroupService,
              private authenticationService: AuthenticationService,
              private cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    // this.getGroups();
  }

  /*
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
   */

  ngDoCheck() {
    this.cd.markForCheck();
  }

  oncreateGroupSubmit(): void {
    const groupData: Group = {
      groupName: this.groupName,
      groupDescription: this.groupDescription
    };

    this.groupService.createGroup(groupData)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
          // this.getGroups();
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
          this.groupsA$.pipe(tap(() => console.log('toto')))
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
          //  this.getGroups();
        },
        error => {
          console.log(error);
        });
  }

  ondeleteGroup(): void {
    this.groupService.deleteGroup(this.groupId)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
          //  this.getGroups();
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
