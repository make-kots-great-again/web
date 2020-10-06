import { ProfilComponent } from './features/components/profil/profil.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'mon-profil', component: ProfilComponent},
    // otherwise redirect to home
  { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
