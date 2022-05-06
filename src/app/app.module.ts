import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouteReuseStrategy, RouterModule} from "@angular/router";
import {CustomRouteReuseStrategy} from "./custom-route-reuse-strategy";
import {HomeComponent} from "./home/home.component";


const routes = [

  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  { path: 'controls', loadChildren: () => import('./controls/controls.module').then(m => m.ControlsModule)},
  { path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchModule)},
  { path: '**', component: HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    {provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy}
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }



