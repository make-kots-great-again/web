import {Component, HostListener, Input, OnInit} from '@angular/core';
import {ReserveService} from "../../../core/services/reserve.service";
import {ReplaySubject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {Reserve} from "../../../shared/models/reserve.model";
import { trigger } from '@angular/animations';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})

export class ReserveComponent implements OnInit {

  public isCollapsed = true;

  @Input() groupId: string;

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  gestionButton : boolean = true;
  reserveArray: Array<Reserve> = [];
  bntStyle: string;
  quantity = 1;
  
  //checkbox variable
  masterSelected:boolean;
  checkedList:any;
  tempReserveArray:any;
  


  constructor(
    private reserveService: ReserveService,
    private modalService: NgbModal
  ) {
    this.masterSelected = false;
  }
  
  ngOnInit(): void {
    this.reserveInfo();
  }
  
  FieldsChange(values: any) {
    if(values){
      this.bntStyle = 'collapse';
    }
    else{
      this.bntStyle = 'visible';
    }
  }

  reserveInfo(): void {
    this.reserveService.getGroupReserveItems(this.groupId)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((data: any) => {
          this.reserveArray = data;
          this.tempReserveArray = data;
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
  /* Modal pop up */
  open(content,object) {
    console.log(content);
    let expiration = object['expiringIn'];
    let quantity = object['quantity'];
    this.modalService.open(content,{ centered: true });
    this.createform(quantity,expiration);
    //console.log(expiration);
  }  
  
  createform(quantity,expiration): void {
    let inputQty = "";
    let inputExp = "";
    inputQty = '<input class="form-control" type="number" value="'+ quantity +'">'
    inputExp = '<input class="form-control" type="number" value="'+ expiration +'">'
    document.getElementById("date-management").innerHTML = inputQty;
    document.getElementById("expiration-management").innerHTML = inputExp;
  }

  /* METHOD for CHECKBOXES */
  tableManagement():void{
    for(let i of this.tempReserveArray){
      i['isSelected']=false;
    }
  }

  checkUncheckAll() {
    for (let i of this.tempReserveArray) {
      i.isSelected = this.masterSelected;
    }
    this.getCheckedList();
  }
  isAllSelected() {
    this.masterSelected = this.tempReserveArray.every(function(item:any) {
        return item.isSelected == true;
      })
    this.getCheckedList();
  }

  getCheckedList(){
    this.checkedList = [];
    for (let i of this.tempReserveArray) {
      if(i.isSelected)
      this.checkedList.push(i);
    }
  }
  /* END METHOD for CHECKBOXES */

  /****************************  Sort Methods ***************************************/

  productAlphabeticalSort(){
    console.log("product sort");
  }

  markAlphabeticalSort(){
    console.log("mark sort");
  }

  quantityNumricalSort(){
    console.log("quantity sort");
  }

  peremptionDayNumericalSort(){
    console.log("days sort");
  }



}
