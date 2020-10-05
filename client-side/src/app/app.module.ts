import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {JwtModule} from '@auth0/angular-jwt';
import {JwtHelperService} from '@auth0/angular-jwt';
import {AgGridModule} from "ag-grid-angular";
import {enableProdMode} from '@angular/core';

import {AdminModule} from './admin/admin.module';
import {FeaturesModule} from './features/features.module';
import {CoreModule} from './core/core.module';

import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";

const appRoutes: Routes = [
  { path: 'admin', loadChildren: () => import(`./admin/admin.module`)
      .then(module => module.AdminModule) },
  {path: "features", loadChildren : './features/features.module#FeaturesModule'},
  //{path: "**", redirectTo: '/home', pathMatch: 'full'}
];

//enableProdMode();

// noinspection AngularInvalidImportedOrDeclaredSymbol
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AdminModule,
    AdminModule,
    FeaturesModule,
    CoreModule,
    RouterModule.forRoot(appRoutes),
    AgGridModule.withComponents([]),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
