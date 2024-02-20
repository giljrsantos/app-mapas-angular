import { CommonModule } from '@angular/common';
import { MapScreenComponent } from './screens/map-screen/map-screen.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    MapScreenComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    MapScreenComponent
  ]
})
export class MapsModule { }
