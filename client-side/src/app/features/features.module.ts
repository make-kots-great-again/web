import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import {SharedModule} from '../shared/shared.module';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {ProfileComponent} from './components/profile/profile.component';
import { UserProfileResolve } from '../core/resolvers/profile.resolve';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent, resolve: {userprofile: UserProfileResolve} },
];

@NgModule({
  declarations: [RegisterComponent, LoginComponent, ProfileComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    UserProfileResolve,
  ],
})
export class FeaturesModule {
}
