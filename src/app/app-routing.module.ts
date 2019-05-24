import { NgModule }             from '@angular/core';
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

const routes: Routes = [
  { path: '', redirectTo: '/creacion', pathMatch: 'full' },
  { path: 'creacion', component: CreacionComponent, children: [
    { path: 'raza', component: CrearRazaComponent },
    { path: 'clase', component: CrearClaseComponent},
    { path: 'trasfondo', component: CrearTrasfondoComponent},
    { path: 'stats', component: CrearStatsComponent}
  ]},
  //{ path: 'personaje/:id', component: DatosComponent, children: [
  { path: 'personaje', component: DatosComponent, children: [
    //{ path: '', redirectTo: '/character', pathMatch: 'full' },
    { path: 'datos', component: StatsComponent },
    { path: 'magia', component: MagiaComponent },
    { path: 'rasgos', component: RasgosComponent }
  ]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}