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
import {AuthenticationService} from '../../../../core/services/authentification.service';

@Component({
  selector: 'app-group-info',
  templateUrl: './group-info.component.html',
  styleUrls: ['./group-info.component.css']
})
export class GroupInfoComponent implements OnInit {

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  groupUsers: Array<User> = [];
  noGroupByProducts: Array<Product> = [];
  templateShoppoingList: Array<Product> = [];

  groupDescription = '';
  groupId = '';
  groupBarCode = '';
  groupProduct = false;
  groupName = '';
  currentUser = '';
  quantity = 1;

  suppressButtonMessage: string = 'Activer la Suppression';

  isPersonnalGroup: boolean;
  isSuppressMode = true;
  expandedView = false;

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
    this.isPersonnalGroup = this.route.snapshot.paramMap.get('groupRole') == 'personal';
    this.groupName = this.route.snapshot.paramMap.get('groupName');

    this.groupMembers();
    this.showGroupShoppingList();
  }

  groupMembers(): void {
    this.groupService.getOneGroup(this.groupId)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(
        (data: any) => {
          this.groupBarCode = data.groupBarCode;
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
          this.groupMembers();
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

          this.noGroupByProducts = data;

          this.templateShoppoingList = this.groupByProducts(data);

          this.templateShoppoingList
            .sort((a, b) => (a.product_name > b.product_name) ? 1 :
              (a.product_name < b.product_name) ? -1 : 0);

          if (this.templateShoppoingList.length === 0) {
            this.suppressButtonMessage = 'Activer la suppression';
            this.isSuppressMode = true;
          }
        },
        error => {
          console.error(error);
        });
  }

  groupProductButton(event: EventTarget): void {
    this.groupProduct = event['checked'];
  }

  addProductToShoppingList(): void {
    const productInfo: Product = {
      code: this.productModel.code,
      quantity: this.quantity,
      groupProduct: this.groupProduct
    }

    this.groupService.addProduct(productInfo, this.groupId)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
          this.showGroupShoppingList();
          this.productModel = '';
          this.quantity = 1;
        },
        error => {
          console.error(error);
        });
  }

  groupByProducts(data: Array<any>): Array<any> {

    const groupByProductCode = data
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

    return [...originalResult, ...result];

  }

  expand(code: { id: string }): void {

    this.expandedView = true;

    const groupByProductCode = this.noGroupByProducts
      .reduce((result, item) => ({
        ...result, [item['code']]: [...(result[item['code']] || []), item]
      }), {});

    this.templateShoppoingList = Object.keys(groupByProductCode)
      .filter(x => groupByProductCode[x].length > 1 && x == code.id)
      .map(x => groupByProductCode[x])
      .reduce((a, b) => a.concat(b), []);
  }

  onDeleteProduct(index: string | number, code?: any): void {

    this.groupService.deleteProduct(this.templateShoppoingList[index].id)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {

          if (this.expandedView) {

            this.groupService.getGroupShoppingList(this.groupId)
              .pipe(takeUntil(this.destroyed$))
              .subscribe((data: any) => {

                  this.noGroupByProducts = data;
                  this.expand(code);
                },
                error => {
                  console.error(error);
                });
          } else {
            this.showGroupShoppingList();
          }
        },
        error => {
          console.error(error);
        });
  }

  switchSuppressMode(): void {
    if (this.isSuppressMode) {
      this.suppressButtonMessage = 'Désactiver la suppression';
      this.isSuppressMode = false;
    } else {
      this.suppressButtonMessage = 'Activer la suppression';
      this.isSuppressMode = true;
    }
  }

  verifyProduct(): boolean {

    let existingProduct: object = {};
    if (typeof this.productModel === 'object') {

    //  const existingProduct1 = this.templateShoppoingList.find((x: Product) => x.code === this.productModel.code && x.product_name);

      existingProduct = this.templateShoppoingList
        .find((x: Product) => (x.code === this.productModel.code
          && x.username === this.currentUser) ||
          (x.code === this.productModel.code && x.product_name));
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
      tap(() => this.searchingUsernames = false))

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
      tap(() => this.searching = false))

  @HostListener('window:beforeunload')
  async ngOnDestroy(): Promise<void> {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}


