import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {ChartModule} from "angular2-chartjs";

import {SharedModule} from "../shared/shared.module";
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {ProfileComponent} from './components/profile/profile.component';
import {AuthGuard} from '../core/guards/';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {ChartsComponent} from "./components/dashboard/charts/charts.component";
import { GroupsComponent } from './components/groups/groups.component';

const routes: Routes = [
  {path: "register", component: RegisterComponent},
  {path: "login", component: LoginComponent},
  {path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard]},
  {path: "profile", component: ProfileComponent, canActivate: [AuthGuard]},
];

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    DashboardComponent,
    ChartsComponent,
    GroupsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ChartModule,
    RouterModule.forChild(routes)
  ]
})
export class FeaturesModule {
}
