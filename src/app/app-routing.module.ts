import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreacionComponent } from './components/creacion/creacion.component';
import { DatosComponent } from './components/datos/datos.component';
import { StatsComponent } from './components/stats/stats.component';
import { CrearRazaComponent } from './components/crear-raza/crear-raza.component';
import { CrearTrasfondoComponent } from './components/crear-trasfondo/crear-trasfondo.component';
import { CrearStatsComponent } from './components/crear-stats/crear-stats.component';
import { CrearClaseComponent } from './components/crear-clase/crear-clase.component';
import { MagiaComponent } from './components/magia/magia.component';
import { RasgosComponent } from './components/rasgos/rasgos.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { CrearInfoComponent } from './components/crear-info/crear-info.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

const routes: Routes = [
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'usuario', component: UsuarioComponent, children: [
      {
        path: 'creacion', component: CreacionComponent, children: [
          { path: '', redirectTo: 'info', pathMatch: 'full' },
          { path: 'info', component: CrearInfoComponent },
          { path: 'raza', component: CrearRazaComponent },
          { path: 'clase', component: CrearClaseComponent },
          { path: 'trasfondo', component: CrearTrasfondoComponent },
          { path: 'stats', component: CrearStatsComponent }
        ]
      },
      //{ path: 'personaje/:id', component: DatosComponent, children: [
      {
        path: 'hoja', component: DatosComponent, children: [
          { path: '', redirectTo: 'datos', pathMatch: 'full' },
          { path: 'datos', component: StatsComponent },
          // { path: 'magia', component: MagiaComponent },
          { path: 'rasgos', component: RasgosComponent },
          //{ path: ':id', component: DatosComponent}
        ]
      },
      {
        path: 'listaPersonajes', component: PersonajesComponent
      },
      {
        path: 'personaje/:id', component: DatosComponent, children: [
          { path: '', redirectTo: 'datos', pathMatch: 'full' },
          { path: 'datos', component: StatsComponent },
          // { path: 'magia', component: MagiaComponent },
          { path: 'rasgos', component: RasgosComponent },
          //{ path: ':id', component: DatosComponent}
        ]
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }