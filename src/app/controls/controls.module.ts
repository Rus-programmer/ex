import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlsComponent } from './controls.component';
import {RouterModule, Routes} from "@angular/router";

const route: Routes = [
  {path: '', component: ControlsComponent}
]

@NgModule({
  declarations: [
    ControlsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
  ]
})
export class ControlsModule { }
