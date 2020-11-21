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
    changeModeGestion():void{

      const element1 = document.getElementsByClassName('gestionMode') as HTMLCollectionOf<HTMLElement>;
      const element2 = document.getElementsByClassName('consultMode') as HTMLCollectionOf<HTMLElement>;
      element2[0].style.visibility = "collapse";
      var i;
      for (i = 0; i < element1.length; i++){
        element1[i].style.visibility = "visible";
      }
      
    }
    changeModeConstultation():void{
      const element1 = document.getElementsByClassName('gestionMode') as HTMLCollectionOf<HTMLElement>;
      const element2 = document.getElementsByClassName('consultMode') as HTMLCollectionOf<HTMLElement>;
      element2[0].style.visibility = "visible";
      var i;
      for (i = 0; i < element1.length; i++){
        element1[i].style.visibility = "collapse";
      }
    }
    
    staticProducts =  [{},{}];
    getProductStatic(): void{

    }
}
