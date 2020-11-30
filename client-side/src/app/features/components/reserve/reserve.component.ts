import {Component, HostListener, Input, OnInit} from '@angular/core';
import {ReserveService} from "../../../core/services/reserve.service";
import {ReplaySubject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {Reserve} from "../../../shared/models/reserve.model";
import { trigger } from '@angular/animations';
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
  tempReserveArray: Array<Reserve> = [];
  bntStyle: string;
  quantity = 1;
  
  isMasterSel:boolean;

  
  constructor(
    private reserveService: ReserveService,
  ) {
    this.isMasterSel = false;
  }
  
  ngOnInit(): void {
    this.reserveInfo();
  }

  eventCheckBox() {
    let checkboxs = document.getElementsByTagName("input");
    for(let i = 1; i < checkboxs.length ; i++) {
      checkboxs[i].checked = !checkboxs[i].checked;
    }
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
}
