import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {FlashMessagesModule} from "angular2-flash-messages";
import {NgxPaginationModule} from 'ngx-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AddClassDirective } from './directives/add-class.directive';
import { ValidInputDirective } from './directives/valid-input.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { ReplacePipe } from './pipes/replace.pipe';
import {TimeAgoPipe} from 'time-ago-pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { FilterLogsPipe } from './pipes/filter-logs.pipe';

import { NavbarComponent } from './components/navbar/navbar.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    TruncatePipe,
    TimeAgoPipe,
    ReplacePipe,
    FilterPipe,
    ValidInputDirective,
    AddClassDirective,
    FilterLogsPipe,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlashMessagesModule.forRoot(),
    RouterModule,
    NgxPaginationModule,
    NgbModule
  ],
  exports: [
    TruncatePipe,
    TimeAgoPipe,
    ReplacePipe,
    FilterPipe,
    ValidInputDirective,
    AddClassDirective,
    FilterLogsPipe,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FlashMessagesModule,
    NavbarComponent,
    NgxPaginationModule,
    NgbModule
  ]
})
export class SharedModule { }
