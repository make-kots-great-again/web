import { Component, OnInit, Input } from '@angular/core';
import * as JsBarcode from 'jsbarcode';

@Component({
  selector: 'app-barcode-gen',
  templateUrl: './barcode-gen.component.html',
  styleUrls: ['./barcode-gen.component.css']
})
export class BarcodeGenComponent implements OnInit {

  @Input() groupId: string;

  constructor() { }

  ngOnInit(): void {
    JsBarcode('#barcode', this.groupId, {
      displayValue: true,
    });
  }

}


