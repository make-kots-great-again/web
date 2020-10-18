import {Component, HostListener, OnInit} from '@angular/core';
import {takeUntil} from "rxjs/operators";
import {GroupService} from "../../../../core/services/group.service";
import {ReplaySubject} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {Observable, of} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, map, tap, switchMap} from 'rxjs/operators'

type Product = {product_name: string, code: number}

@Component({
  selector: 'app-group-info',
  templateUrl: './group-info.component.html',
  styleUrls: ['./group-info.component.css']
})
export class GroupInfoComponent implements OnInit {

  groupDescription: string = "";
  addUser: string = "";
  groupUsers: Array<any> = [];
  groupId: string = "";

  model: any;
  searching : boolean = false;
  searchFailed : boolean = false;
  formatter = (product: Product) => product.product_name;

  constructor(private groupService: GroupService, private route: ActivatedRoute) { }

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  ngOnInit(): void {
    this.groupId = this.route.snapshot.paramMap.get('groupId');
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

  addUserToGroup() {
    const groupId = this.groupId;
    const username = this.addUser;
    this.groupService.addMemberToGroup(groupId, username)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
          this.groupDetails();
        },
        error => {
          console.log(error)
        });
  }


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

  addProduct(){
    console.log(this.model)
  }

  verifyProduct() : boolean {
    return (typeof this.model === 'object');
  }

  @HostListener('window:beforeunload')
  async ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
