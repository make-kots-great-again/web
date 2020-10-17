import {Component, HostListener, OnInit} from '@angular/core';
import {GroupService} from '../../../core/services/group.service'
import {BehaviorSubject, ReplaySubject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {Observable, of} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, map, tap, switchMap} from 'rxjs/operators'
import {AuthenticationService} from "../../../core/services/authentification.service";

type Product = { product_name: string, code: number };

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


  model: any;
  searching: boolean = false;
  searchFailed: boolean = false;
  formatter = (product: Product) => product.product_name;

  constructor(private groupService: GroupService,
              private authenticationService: AuthenticationService) {
  }

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

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

  leaveGroupClicked(groupId: any, groupName: any) {
    this.groupId = groupId.id;
    this.groupName = groupName.id;
  }

  deleteGroupClicked(groupId: any, groupName: any) {
    this.groupId = groupId.id;
    this.groupName = groupName.id;
  }

  onLeaveGroup(): void {
    const currentUser: any = this.authenticationService.currentUserValue;
    this.groupService.leaveGroup(this.groupId, currentUser.userId)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(
        (data: any) => {
          this.getGroups();
        },
        error => {
          console.log(error)
        });
  }

  ondeleteGroup() {
    this.groupService.deleteGroup(this.groupId)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(
        (data: any) => {
          this.getGroups();
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


// map((data: Array<any>) => data.map(x => x.product_name + ` -> code : ${x.code}`)),
