import {Component, HostListener, Input, OnInit} from '@angular/core';
import {ReserveService} from "../../../core/services/reserve.service";
import {ReplaySubject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {Reserve} from "../../../shared/models/reserve.model";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})

export class ReserveComponent implements OnInit {

  public isCollapsed = true;

  @Input() groupId: string;

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  
  reserveArray: Array<Reserve> = [];
  bntStyle: string;
  quantity = 1;

  gestionButton: boolean = true;
  gestionButtonMessage: string = 'mode Management';
  gestionButtonLegende: string = "le mode Management permet de gérer les produits qui sont en attente de validation";
  //checkbox variable
  masterSelected: boolean;
  checkedList: any;
  tempReserveArray: any;

  isProductSorted = false;
  isMarkSorted = false;
  isQuantitySorted = false;
  isDaySorted = false;

  isProductSortedTemp = false;
  isMarkSortedTemp = false;
  isQuantitySortedTemp = false;
  isDaySortedTemp = false;

  newQuantity=0;
  newExpriringDate=0;
  modifiedProduct:any={};

  constructor(
    private reserveService: ReserveService,
    private modalService: NgbModal,
  ) {
    this.masterSelected = false;
  }

  ngOnInit(): void {
    this.reserveInfo();
  }


  updateItem(){
    if(this.isCollapsed){
      if(this.newQuantity == 0){
        //this.deleteItem(this.modifiedProduct.id, this.modifiedProduct.index, this.reserveArray);
      }
      else{
        this.reserveService.reserveItemUpdate(this.newQuantity, this.modifiedProduct.id)
                          .pipe(takeUntil(this.destroyed$)).subscribe((data: any) => {
                            this.reserveArray[this.modifiedProduct.index].quantity = this.newQuantity;
              },
              error => {
                console.error(error);
              });
      }
    }
    else{
      if(this.newQuantity == 0){
        //this.deleteItem(this.modifiedProduct.id, this.modifiedProduct.index, this.tempReserveArray);
      }
      else{
        this.reserveService.tempReserveItemUpdate(this.newQuantity, this.newExpriringDate, this.modifiedProduct.id)
                            .pipe(takeUntil(this.destroyed$)).subscribe((data: any) => {
                              this.tempReserveArray[this.modifiedProduct.index].quantity = this.newQuantity;
                              this.tempReserveArray[this.modifiedProduct.index].expiringIn = this.newExpriringDate;
                            },
                            error => {
                              console.error(error);
                            });
      }
    }
    this.modalService.dismissAll();
  }

  switchGestionMode(): void {
    if (this.gestionButton) {
      this.gestionButtonMessage = 'mode Gestion';
      this.gestionButtonLegende = "Le mode Gestion permet de gérer les produits de la réserve";
      this.gestionButton = false;
    } else {
      this.gestionButtonMessage = 'mode Management';
      this.gestionButtonLegende = "Le mode Management permet de gérer les produits qui sont en attente de validation";
      this.gestionButton = true;
    }
  }
  /****************************  API Methods ***************************************/
  
  addItem(value, index, listToUpdate) {
    
    this.reserveService.addItemToReserve(value)
      .pipe(takeUntil(this.destroyed$)).subscribe((data: any) => {
        index['valid']=true;
        this.reserveArray.splice(index, 0,index);
        //listToUpdate.splice(index, 1);
      },
        error => {
          console.error(error);
        });
  }

  deleteItem(value, index, listToDelete) {
    
    this.reserveService.removeItemFromReserve(value)
      .pipe(takeUntil(this.destroyed$)).subscribe((data: any) => {
        listToDelete.splice(index, 1);
      },
        error => {
          console.error(error);
        });
  }

  reserveInfo(): void {
    
    this.reserveService.getGroupReserveItems(this.groupId)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((data: any) => {
        this.reserveArray = data;
        this.tempReserveArray = data;
        console.log(data);
        this.tableManagement();
      },
        error => {
          console.error(error);
        });
  }

  @HostListener('window:beforeunload')
  async ngOnDestroy(): Promise<any> {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
  /**************************** ADD/DELETE ALL ***************************************/
  addAllItem() {
    
    for (let i of this.tempReserveArray) {
      if (i["isSelected"]) {
        let data = {
          "itemId": i['id'],
          "validity": true
        }
        this.addItem(data, i, this.tempReserveArray);
      }
    }
  }
  deleteAllItem() {
    
    for (let i of this.tempReserveArray) {
      if (i["isSelected"]) {
        this.deleteItem(i['id'], i, this.tempReserveArray);
      }
    }
  }

  /**************************** POPUP ***************************************/
  open(content,index, currentArray) {
    
    this.newQuantity = currentArray[index].quantity;
    this.newExpriringDate = currentArray[index].expiringIn;
    this.modifiedProduct = {'name': currentArray[index].product_name, 
                            'index': index,
                            'id': currentArray[index].id
                          };
    
    this.modalService.open(content,{ centered: true });
  }  

  FieldsChange(values: any) {
    if (values) {
      this.bntStyle = 'collapse';
    }
    else {
      this.bntStyle = 'visible';
    }
  }


  /**************************** CHECKBOXES ***************************************/
  tableManagement(): void {
    let newTempArray = [];
    let newReserveArray = [];
    for (let i of this.tempReserveArray) {
      if (i['valid']) {
        newReserveArray.push(i);
      }
      else {
        newTempArray.push(i);
      }
    }

    this.tempReserveArray = newTempArray;
    this.reserveArray = newReserveArray;

    for (let i of this.tempReserveArray) {
      i['isSelected'] = false;
    }
  }

  checkUncheckAll() {
    for (let i of this.tempReserveArray) {
      i.isSelected = this.masterSelected;
    }
    this.getCheckedList();
  }
  isAllSelected() {
    this.masterSelected = this.tempReserveArray.every(function (item: any) {
      return item.isSelected == true;
    })
    this.getCheckedList();
  }

  getCheckedList() {
    this.checkedList = [];
    for (let i of this.tempReserveArray) {
      if (i.isSelected)
        this.checkedList.push(i);
    }
  }

  /******************************** Helpers functions ****************************************/

  /**********************************  Sort Methods ***************************************/

  productAlphabeticalSort(arrayToSorted: any, reserve: boolean) {

    if (reserve) {

      this.isMarkSorted = false;
      this.isQuantitySorted = false;
      this.isDaySorted = false;
    }
    else {

      this.isMarkSortedTemp = false;
      this.isQuantitySortedTemp = false;
      this.isDaySortedTemp = false;
    }


    if ((!this.isProductSorted && reserve) || (!this.isProductSortedTemp && !reserve)) {

      if (reserve) {

        this.isProductSorted = true;
      }
      else {

        this.isProductSortedTemp = true;
      }

      arrayToSorted.sort((a, b) => {

        if (a.product_name < b.product_name) {

          return -1;
        } else if (a.product_name > b.product_name) {

          return 1;
        }

        return 0;
      });
    }
    else {

      arrayToSorted.reverse();
    }
  }

  markAlphabeticalSort(arrayToSorted: any, reserve: boolean) {

    if (reserve) {

      this.isProductSorted = false;
      this.isQuantitySorted = false;
      this.isDaySorted = false;
    }
    else {

      this.isProductSortedTemp = false;
      this.isQuantitySortedTemp = false;
      this.isDaySortedTemp = false;
    }

    if ((!this.isMarkSorted && reserve) || (!this.isMarkSortedTemp && !reserve)) {

      if (reserve) {

        this.isMarkSorted = true;
      }
      else {

        this.isMarkSortedTemp = true;
      }

      arrayToSorted.sort((a, b) => {

        if (a.product_brand < b.product_brand) {

          return -1;
        } else if (a.product_brand > b.product_brand) {

          return 1;
        }

        return 0;
      });
    }
    else {
      arrayToSorted.reverse();
    }
  }

  quantityNumricalSort(arrayToSorted: any, reserve: boolean) {

    if (reserve) {

      this.isProductSorted = false;
      this.isMarkSorted = false;
      this.isDaySorted = false;
    }
    else {

      this.isProductSortedTemp = false;
      this.isMarkSortedTemp = false;
      this.isDaySortedTemp = false;
    }


    if ((!this.isQuantitySorted && reserve) || (!this.isQuantitySortedTemp && !reserve)) {

      if (reserve) {
        this.isQuantitySorted = true;
      }
      else {
        this.isQuantitySortedTemp = true;
      }

      arrayToSorted.sort((a, b) => {

        if (a.quantity < b.quantity) {

          return -1;
        } else if (a.quantity > b.quantity) {

          return 1;
        }

        return 0;
      });
    }
    else {

      arrayToSorted.reverse();
    }
  }

  peremptionDayNumericalSort(arrayToSorted: any, reserve: boolean) {

    if (reserve) {

      this.isProductSorted = false;
      this.isMarkSorted = false;
      this.isQuantitySorted = false;
    }
    else {

      this.isProductSortedTemp = false;
      this.isMarkSortedTemp = false;
      this.isQuantitySortedTemp = false;
    }

    if ((!this.isDaySorted && reserve) || (!this.isDaySortedTemp && !reserve)) {

      if (reserve) {

        this.isDaySorted = true;
      }
      else {

        this.isDaySortedTemp = true;
      }

      arrayToSorted.sort((a, b) => {

        if (a.expiringIn < b.expiringIn) {

          return -1;
        } else if (a.expiringIn > b.expiringIn) {

          return 1;
        }

        return 0;
      });
    }
    else {

      arrayToSorted.reverse();
    }
  }

}
