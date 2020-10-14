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

  groups : any ;

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(
    private groupService: GroupService,
  ) { }

  ngOnInit(): void {
    this.getGroups();
  }

  getGroups() : void {
    this.groupService.getMyGroups()
      .pipe(takeUntil(this.destroyed$))
      .subscribe(
        async (data: any) => {
         this.groups = data.body.userInfo[0].groups
          console.log(data);
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
