import {Component, HostListener, OnInit} from '@angular/core';
import {takeUntil, filter} from "rxjs/operators";
import {GroupService} from "../../../../core/services/group.service";
import {UserService} from "../../../../core/services/user.service";
import {ReplaySubject} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {Observable, of} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, tap, switchMap} from 'rxjs/operators'
import {User} from "../../../../shared/models/user.model";

type Product = { product_name: string, code: number }
type Member = { username: string, email: string }

@Component({
  selector: 'app-group-info',
  templateUrl: './group-info.component.html',
  styleUrls: ['./group-info.component.css']
})
export class GroupInfoComponent implements OnInit {

  groupDescription: string = "";
  addUser: string = "";
  groupUsers: Array<User> = [];
  groupId: string = "";

  productModel: any;
  memberModel: any;
  searchingUsernames: boolean = false;
  usernameSearchFailed: boolean = false;
  searching: boolean = false;
  searchFailed: boolean = false;
  productFormatter = (product: Product) => product.product_name;
  Memberformatter = (member: Member) => member.username;

  constructor(
    private groupService: GroupService,
    private userService: UserService,
    private route: ActivatedRoute) {
  }

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  ngOnInit(): void {
    this.groupId = this.route.snapshot.paramMap.get('groupId');
    this.groupDetails();

  }

  groupDetails(): void {
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

  addUserToGroup(): void {
    const groupId = this.groupId;
    const username = this.memberModel.username;
    this.groupService.addMemberToGroup(groupId, username)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
          this.groupDetails();
        },
        error => {
          console.log(error)
        });
  }


  usernameList = (useranme$: Observable<string>) =>
    useranme$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searchingUsernames = true),
      switchMap((username: string) => {
        if (username === '') return of([]);
        return this.userService.searchUsername(username).pipe(
          tap((data: Array<Member>) => (data.length === 0) ?
            this.usernameSearchFailed = true : this.usernameSearchFailed = false),
          catchError(() => {
            this.usernameSearchFailed = true;
            return of([]);
          }))
      }),
      tap(() => this.searchingUsernames = false)
    )


  productList = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap((productName: string) => {
        if (productName === '') return of([]);
        return this.groupService.searchProducts(productName).pipe(
          tap((data: Array<Product>) => (data.length === 0) ?
            this.searchFailed = true : this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      }),
      tap(() => this.searching = false)
    )

  addProduct() {
    console.log(this.productModel)
  }

  verifyProduct(): boolean {
    return (typeof this.productModel === 'object');
  }

  verifyMember(): boolean {
    return (typeof this.memberModel === 'object');
  }

  @HostListener('window:beforeunload')
  async ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}


/*
tap((data: any) => this.groupUsers
            .filter((x, i) => x.username !== data[i].username)),
 */
