import { UserProfileResolve } from './core/resolvers/userProfile.resolve';
import { UserProfileComponent } from './features/components/userProfile/userProfile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: UserProfileComponent, resolve: {userprofile: UserProfileResolve} },
    // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
  providers: [
    UserProfileResolve,
  ],
})
export class AppRoutingModule { }
