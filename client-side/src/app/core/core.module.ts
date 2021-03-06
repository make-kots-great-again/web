import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {SharedModule} from '../shared/shared.module';
import {HomePageComponent} from './components/home-page/home-page.component';
import {AboutComponent} from './components/about/about.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {JwtInterceptor} from './interceptor/jwt.interceptor';
import {ErrorInterceptor} from './interceptor/error.interceptor';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [HomePageComponent, AboutComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ]
})
export class CoreModule {
}
