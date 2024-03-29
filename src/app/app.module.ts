import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { StatsComponent } from './components/stats/stats.component';
import { DatosComponent } from './components/datos/datos.component';
import { AppRoutingModule } from './app-routing.module';
import { CreacionComponent } from './components/creacion/creacion.component';
import { CrearRazaComponent } from './components/crear-raza/crear-raza.component';
import { CrearClaseComponent } from './components/crear-clase/crear-clase.component';
import { CrearStatsComponent } from './components/crear-stats/crear-stats.component';
import { CrearTrasfondoComponent } from './components/crear-trasfondo/crear-trasfondo.component';
import { MagiaComponent } from './components/magia/magia.component';
import { RasgosComponent } from './components/rasgos/rasgos.component';
import { OnlyNumbersDirective } from './directives/only-numbers.directive';
import { ExperienceLimitDirective } from './directives/experience-limit.directive';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { CrearInfoComponent } from './components/crear-info/crear-info.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    StatsComponent,
    DatosComponent,
    CreacionComponent,
    CrearRazaComponent,
    CrearClaseComponent,
    CrearStatsComponent,
    CrearTrasfondoComponent,
    MagiaComponent,
    RasgosComponent,
    OnlyNumbersDirective,
    ExperienceLimitDirective,
    PersonajesComponent,
    CrearInfoComponent,
    LoginComponent,
    RegisterComponent,
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
