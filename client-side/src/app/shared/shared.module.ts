import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NavbarComponent} from './components/navbar/navbar.component';

const routes: Routes = [];

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    NavbarComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {
}
