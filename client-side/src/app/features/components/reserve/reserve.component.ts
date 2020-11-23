import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../core/services/authentification.service';
import { takeUntil } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';
import { Product } from '../../../shared/models/product.model';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
  
  gestionButton : boolean = true;
  open(content, object) {
    let expiration = object['Expiration'];
    let quantity = object["Quantité"];
    this.modalService.open(content);
    this.createform(quantity,expiration);
    //console.log(expiration);
  }  

  
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
  addDays(days : number): Date{
    var futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + days);
    return futureDate;
  }

  createform(quantity,expiration): void {
    let s = "";
    let date ="";
    let day = this.addDays(expiration).getDate();
    
    let month = this.addDays(expiration).getMonth();
    let monthTemp;
    if(month>9){
      monthTemp =  month;
    }
    else{
      monthTemp =  '0'+month;
    }
    let year = this.addDays(expiration).getFullYear();
    if(day>9){
      date =  year+'-'+ monthTemp+'-'+day;

    }
    else{
      date =  year+'-'+ monthTemp+'-0'+day;
    }
    console.log(date);
    s += '<form><div class="form-group"><label for="recipient-name" class="col-form-label">Quantité</label><div class="col-10">'
    
    +'<input class="form-control" type="number"value="'+quantity+'" id="example-number-input">'
    +"</div></div><div class='form-group'><label for='recipient-name' class='col-form-label'>Date d'expiration</label><div class='col-10'>"
    +'<input class="form-control" type="date" value="'+date+'" id="example-date-input">'
    +'</div></div> </form>'
    document.getElementById("modalForm").innerHTML = s;
  }

  FieldsChange(values: any) {
    this.gestionButton = !this.gestionButton;
  }
  mockupHeaders=["ID","Nom","Expiration","Quantité"];
  header=["id_element","id_prod","date_expiration","quantity"];
  staticProducts = [
    {
      ID: 123654,
      Nom: 'tomates',
      Expiration: 15,
      Quantité: 30
      
    },
    {
      ID: 12365423789,
      Nom: 'poire',
      Expiration: 13,
      Quantité: 40,
    },
    {
      ID: 897413,
      Nom: 'bouteille de vin',
      Expiration: 460,
      Quantité: 40,
      
    },
    {
      ID: 82344812,
      Nom: 'Jupiler',
      Expiration: 351,
      Quantité: 40,
      
    },
    {
      ID: 20748979,
      Nom: 'pates',
      Expiration: 32,
      Quantité: 30,
      
    },
    {
      ID: 7513623,
      Nom: 'pomme',
      Expiration: 7,
      Quantité: 70,
      
    }];
  getProductStatic(): void {
  }
}