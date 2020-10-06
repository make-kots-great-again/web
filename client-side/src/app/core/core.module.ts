import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class CoreModule { }
