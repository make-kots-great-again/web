import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {CustomersModule} from './customers/customers.module';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {FeaturesModule} from './features/features.module';
import {AppComponent} from './app.component';
import {Routes, RouterModule} from '@angular/router';


// {path: "features", loadChildren : './customers/customers.module#CustomersModule'}
const routes: Routes = [
  {
    path: 'customers', loadChildren: () =>
      import('./customers/customers.module').then(m => m.CustomersModule)
  },
  {
    path: 'features', loadChildren: () =>
      import('./features/features.module').then(m => m.FeaturesModule)
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CustomersModule,
    FeaturesModule,
    SharedModule,
    CoreModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
