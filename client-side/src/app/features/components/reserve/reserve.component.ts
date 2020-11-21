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
      this.getProduct();
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
}
