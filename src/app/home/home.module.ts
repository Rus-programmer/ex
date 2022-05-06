import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {RouterModule, Routes} from "@angular/router";

const route: Routes = [
  {path: '', component: HomeComponent}
]

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    RouterModule.forChild(route),
    CommonModule
  ]
})
export class HomeModule { }
