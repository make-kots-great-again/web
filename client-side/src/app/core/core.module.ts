import { UserService } from 'src/app/core/services/user.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import {RouterModule} from "@angular/router";
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [
  ]
})
export class CoreModule { }
