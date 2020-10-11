import { UserService } from 'src/app/core/services/user.service';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SharedModule} from '../shared/shared.module';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {ProfileComponent} from './components/profile/profile.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent},
];

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    UserService,
  ],
})
export class FeaturesModule {
}
