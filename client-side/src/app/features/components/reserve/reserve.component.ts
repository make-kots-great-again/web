import {Component, HostListener, Input, OnInit} from '@angular/core';
import {ReserveService} from "../../../core/services/reserve.service";
import {ReplaySubject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {Reserve} from "../../../shared/models/reserve.model";

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {

  @Input() groupId: string;


  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);


  reserveArray: Array<Reserve> = [];

  quantity = 1;

  constructor(
    private reserveService: ReserveService,
  ) {
  }

  ngOnInit(): void {
    this.reserveInfo();
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
