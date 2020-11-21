import {UserService} from 'src/app/core/services/user.service';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ChartModule} from 'angular2-chartjs';
import {NgxQRCodeModule} from '@techiediaries/ngx-qrcode';

import {SharedModule} from '../shared/shared.module';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {ProfileComponent} from './components/profile/profile.component';
import {AuthGuard} from '../core/guards/auth.guard';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ChartsComponent} from './components/dashboard/charts/charts.component';
import {GroupsComponent} from './components/groups/groups.component';
import {QrGenComponent} from './components/profile/qr-gen/qr-gen.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {GroupInfoComponent} from './components/groups/group-info/group-info.component';
import { BarcodeGenComponent } from './components/groups/barcode-gen/barcode-gen.component';
import { ReserveComponent } from './components/reserve/reserve.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'groups', component: GroupsComponent, canActivate: [AuthGuard]},
  {path: 'group/:groupId/:groupRole/:groupName', component: GroupInfoComponent, canActivate: [AuthGuard]},
];

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    DashboardComponent,
    ChartsComponent,
    GroupsComponent,
    QrGenComponent,
    GroupInfoComponent,
    BarcodeGenComponent,
    ReserveComponent,
  ],
  imports: [
    SharedModule,
    ChartModule,
    NgxQRCodeModule,
    RouterModule.forChild(routes),
    NgbModule
  ],
  providers: [
    UserService,
  ],
})
export class FeaturesModule {
}
