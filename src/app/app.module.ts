import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { StatsComponent } from './components/stats/stats.component';
import { HojaComponent } from './components/hoja/hoja.component';

@NgModule({
  declarations: [
    AppComponent,
    StatsComponent,
    HojaComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
