import { UserProfileResolve } from './../core/resolvers/userProfile.resolve';
import { UserService } from './../core/services/user.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './components/userProfile/userProfile.component';

@NgModule({
  declarations: [UserProfileComponent, ],
  imports: [
    CommonModule
  ],
  providers: [
    UserService,
  ]
})
export class FeaturesModule { }
