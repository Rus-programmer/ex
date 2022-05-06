import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('ControlsComponent ngOnInit')
  }

  ngOnDestroy(): void {
    console.log('ControlsComponent ngOnDestroy')
  }

}
