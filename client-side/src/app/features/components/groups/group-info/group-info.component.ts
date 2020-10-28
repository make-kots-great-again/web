import {Component, HostListener, OnInit} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {GroupService} from '../../../../core/services/group.service';
import {UserService} from '../../../../core/services/user.service';
import {ReplaySubject} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {Observable, of} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, tap, switchMap} from 'rxjs/operators';
import {User} from '../../../../shared/models/user.model';
import {Product} from '../../../../shared/models/product.model';
import {groupMember} from '../../../../shared/models/group.model';
import {AuthenticationService} from "../../../../core/services/authentification.service";

@Component({
  selector: 'app-group-info',
  templateUrl: './group-info.component.html',
  styleUrls: ['./group-info.component.css']
})
export class GroupInfoComponent implements OnInit {

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  groupDescription = '';
  addUser = '';
  groupUsers: Array<User> = [];
  noGroupByProducts: Array<Product> = [];
  groupByCodeProducts: any = [];
  templateShoppoingList: any = [];
  expandView = false;
  productCode = 0;
  groupId = '';
  currentUser = '';
  quantity = 1;

  productModel: any;
  memberModel: any;
  searchingUsernames = false;
  usernameSearchFailed = false;
  searching = false;
  searchFailed = false;
  productFormatter = (product: Product) => product.product_name;
  Memberformatter = (member: groupMember) => member.username;

  constructor(
    private groupService: GroupService,
    private userService: UserService,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.currentUser = this.authenticationService.currentUserValue.username;
    this.groupId = this.route.snapshot.paramMap.get('groupId');
    this.groupDetails();
    this.showGroupShoppingList();
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
          console.error(error);
        });
  }

  addUserToGroup(): void {
    const groupId = this.groupId;
    const username = this.memberModel.username;
    this.groupService.addMemberToGroup(groupId, username)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
          this.groupDetails();
          this.memberModel = '';
        },
        error => {
          console.error(error);
        });
  }

  showGroupShoppingList(): void {
    this.groupService.getGroupShoppingList(this.groupId)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((data: any) => {
          data.sort((a, b) => (a.product_name > b.product_name) ? 1 :
            (a.product_name < b.product_name) ? -1 : 0);
          this.noGroupByProducts = data;
          this.groupByProducts();
          this.templateShoppoingList = this.groupByCodeProducts;
        },
        error => {
          console.error(error);
        });
  }

  usernameList = (username$: Observable<string>) =>
    username$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searchingUsernames = true),
      switchMap((username: string) => {
        if (username === '') return of([]);
        return this.userService.searchUsername(username).pipe(
          tap((data: Array<groupMember>) => (data.length === 0) ?
            this.usernameSearchFailed = true : this.usernameSearchFailed = false),
          catchError(() => {
            this.usernameSearchFailed = true;
            return of([]);
          }));
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
          }));
      }),
      tap(() => this.searching = false)
    )

  addProductToShoppingList(): void {
    const productInfo: Product = {
      code: this.productModel.code,
      quantity: this.quantity
    }

    this.groupService.addProduct(productInfo, this.groupId)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
          this.showGroupShoppingList();
          this.productModel = '';
        },
        error => {
          console.error(error);
        });
  }

  verifyProduct(): boolean {

    let existingProduct: object = {};
    if (typeof this.productModel === 'object') {
      existingProduct = this.noGroupByProducts
        .find(x => x.code === this.productModel.code
          && x.username === this.currentUser);
    }
    return (typeof this.productModel === 'object') && !existingProduct;

  }

  verifyMember(): boolean {

    let existingMember: object = {};
    if (typeof this.memberModel === 'object') {
      existingMember = this.groupUsers.find(x =>
        x.username === this.memberModel.username);
    }
    return (typeof this.memberModel === 'object') && !existingMember;
  }

  groupByProducts(): void {

    const groupByProductCode = this.noGroupByProducts
      .reduce((result, item) => ({
        ...result, [item['code']]: [...(result[item['code']] || []), item]
      }), {});

    const result = [];

    const productCodes = Object.keys(groupByProductCode)
      .filter(x => groupByProductCode[x].length > 1)
      .map(x => groupByProductCode[x])
      .reduce((a, b) => a.concat(b), [])
      .reduce((result, item) => ({
        ...result, [item['code']]: [...(result[item['code']] || []), item]
      }), {});

    const quantities = Object.keys(productCodes).map(x => productCodes[x].map(y => y.quantity));
    const usernames = Object.keys(productCodes).map(x => productCodes[x].map(y => y.username));
    const product_names = Object.keys(productCodes).map(x => productCodes[x].map(y => y.product_name));

    Object.keys(productCodes).forEach((x, i) => {
      result.push({
        product_name: product_names[i][0],
        code: Number(x),
        username: usernames[i].join(' - '),
        quantity: quantities[i].reduce((a, b) => a + b, 0),
        flag: true,
      })
    });

    const originalResult = Object.keys(groupByProductCode)
      .filter(x => groupByProductCode[x].length === 1)
      .map(x => groupByProductCode[x])
      .reduce((a, b) => a.concat(b), []);

   // const code = this.getCode(this.productCode);

   // console.log(code)

    const originalResult1 = Object.keys(groupByProductCode)
      .filter(x => groupByProductCode[x].length > 1 && Number(x) == 16650)
      .map(x => groupByProductCode[x])
      .reduce((a, b) => a.concat(b), []);

    originalResult.forEach((x, i) => originalResult[i].flag = false);
    originalResult1.forEach((x, i) => originalResult1[i].flag = true);

    const index = originalResult1.findIndex(x => x.code === 16650);

    this.groupByCodeProducts = [...originalResult, ...result];
    result.splice(index, 1, ...originalResult1);
    this.noGroupByProducts = [...originalResult, ...result];

  }

  getCode(code: any): number {
    this.productCode = code.id;
    return Number(code.id);
  }

  expand(code: any): void {
    this.templateShoppoingList = this.noGroupByProducts;
    this.productCode = Number(code.id);
    this.expandView = true;
  }

  collapse(code: any): void {
    this.templateShoppoingList = this.groupByCodeProducts;
    this.productCode = Number(code.id);
    this.expandView = false;
  }

  @HostListener('window:beforeunload')
  async ngOnDestroy(): Promise<void> {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
