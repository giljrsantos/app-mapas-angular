import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { MapsModule } from './maps/maps.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MapsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
