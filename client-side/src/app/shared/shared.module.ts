import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NavbarComponent} from './components/navbar/navbar.component';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {TruncatePipe} from './pipes/truncate.pipe';

const routes: Routes = [];

@NgModule({
  declarations:
    [NavbarComponent, SpinnerComponent, TruncatePipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    CommonModule,
    NavbarComponent,
    SpinnerComponent,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TruncatePipe
  ]
})
export class SharedModule {
}
