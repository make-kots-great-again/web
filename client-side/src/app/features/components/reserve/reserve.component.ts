import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../core/services/authentification.service';
import { takeUntil } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {
  produits: Array<Product> = [];
  filterProduct = '';
  productName = '';
  productId = '';
  productDescription = '';

  constructor(private authenticationService: AuthenticationService,
    private cd: ChangeDetectorRef) { }

    ngOnInit(): void {
    }
    getProduct(): void {/*
      this.groupService.getMyGroups()
      .pipe(takeUntil(this.destroyed$))
      .subscribe(
        (data: any) => {
          this.groups = data;
        },
        error => {
          console.log(error);
        });*/
    }
    FieldsChange(values:any){
      console.log(values.currentTarget.checked);
      if(values.currentTarget.checked){

      }
      else{

      }
    }
    staticProducts =  [
      {nom: 'tomates', quantity: 30, expiration: 30},
      {nom: 'poire', quantity: 40, expiration: 30},
      {nom: 'bouteille de vin', quantity: 40, expiration: 30},
      {nom: 'Jupiler', quantity: 40, expiration: 30},
      {nom: 'pates', quantity: 30, expiration: 30},
      {nom: 'pomme', quantity: 70, expiration: 30}
    ];
    getProductStatic(): void{

    }
}
