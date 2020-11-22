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
  FieldsChange(values: any) {
    console.log(values.currentTarget.checked);
    if (values.currentTarget.checked) {

    }
    else {

    }
  }
  mockupHeaders=["id","nom","expiration","quantity"];
  header=["id_element","id_prod","date_expiration","quantity"];
  staticProducts = [
    {
      id: 123654,
      nom: 'tomates',
      expiration: 15,
      quantity: 30
      
    },
    {
      id: 12365423789,
      nom: 'poire',
      expiration: 13,
      quantity: 40,
    },
    {
      id: 897413,
      nom: 'bouteille de vin',
      expiration: 460,
      quantity: 40,
      
    },
    {
      id: 82344812,
      nom: 'Jupiler',
      expiration: 351,
      quantity: 40,
      
    },
    {
      id: 20748979,
      nom: 'pates',
      expiration: 32,
      quantity: 30,
      
    },
    {
      id: 7513623,
      nom: 'pomme',
      expiration: 7,
      quantity: 70,
      
    }];
  getProductStatic(): void {
  }
}
