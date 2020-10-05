import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ChartModule} from "angular2-chartjs";

import {SharedModule} from "../shared/shared.module";

import {ReviewsComponent} from "./components/reviews/reviews.component";
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ProfileComponent} from './components/profile/profile.component';
import {ChartsComponent} from './components/dashboard/charts/charts.component';
import {QuestionsComponent} from './components/questions/questions.component';
import {ResultsComponent} from './components/questions/results/results.component';
import { VerifyEmailComponent } from './components/register/verify-email/verify-email.component';

const appRoutes: Routes = [
  {path: "register", component: RegisterComponent},
  {path: "verify-email/:key", component: VerifyEmailComponent},
  {path: "login", component: LoginComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "questions", component: QuestionsComponent},
  {path: "results", component: ResultsComponent},
  {path: "reviews", component: ReviewsComponent},
  {path: "profile/:id", component: ProfileComponent}
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ProfileComponent,
    ChartsComponent,
    QuestionsComponent,
    ResultsComponent,
    ReviewsComponent,
    VerifyEmailComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ChartModule,
    RouterModule.forChild(appRoutes),
  ]
})
export class FeaturesModule { }
