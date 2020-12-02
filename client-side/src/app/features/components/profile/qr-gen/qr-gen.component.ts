import { Component, OnInit } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { AuthenticationService } from 'src/app/core/services/authentification.service';

@Component({
  selector: 'app-qr-gen',
  templateUrl: './qr-gen.component.html',
  styleUrls: ['./qr-gen.component.css']
})
export class QrGenComponent implements OnInit {

  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value: string;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.value = this.getToken();
  }

  getToken(): string {
    let value;
    try {
      value = this.authenticationService.currentUserValue.token;
    } catch (error) {
      value = '';
    }
    return value;
  }
}


//COMMENT TO REMOVE