import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import {RouterModule, Routes} from "@angular/router";

const route: Routes = [
  {path: '', component: SearchComponent}
]

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
  ]
})
export class SearchModule { }
