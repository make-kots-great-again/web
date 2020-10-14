import { UserService } from 'src/app/core/services/user.service';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ChartModule} from "angular2-chartjs";

import {SharedModule} from '../shared/shared.module';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {ProfileComponent} from './components/profile/profile.component';
import {AuthGuard} from "../core/guards/auth.guard";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {ChartsComponent} from "./components/dashboard/charts/charts.component";
import {GroupsComponent} from './components/groups/groups.component';

const routes: Routes = [
<<<<<<< HEAD
  {path: "register", component: RegisterComponent},
  {path: "login", component: LoginComponent},
  {path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard]},
  {path: "profile", component: ProfileComponent, canActivate: [AuthGuard]},
  {path: "groups", component: GroupsComponent, canActivate: [AuthGuard]},
=======
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent},
>>>>>>> US_3-v2
];

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
<<<<<<< HEAD
    ProfileComponent,
    DashboardComponent,
    ChartsComponent,
    GroupsComponent,
=======
    ProfileComponent
>>>>>>> US_3-v2
  ],
  imports: [
    SharedModule,
    ChartModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    UserService,
  ],
})
export class FeaturesModule {
}
