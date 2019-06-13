import { Component, OnInit } from '@angular/core';
import { Raza } from '../../objects/raza';
import { DndService } from '../../services/dnd-service';
import { RasgoRaza } from '../../objects/rasgoRaza';
import { SubRaza } from '../../objects/subRaza';
import { RasgoSubraza } from '../../objects/rasgoSubraza';

@Component({
  selector: 'app-crear-raza',
  templateUrl: './crear-raza.component.html',
  styleUrls: ['./crear-raza.component.scss']
})
export class CrearRazaComponent implements OnInit {

  razaCreacion = 0;

  subRazaCreacion = null;

  mostrar = false;

  mostrarSubraza = false;

  mostrarRasgoSubraza = false;

  elegido = false;

  razas: Raza[];

  rasgoRaza: RasgoRaza[];

  subrazas: SubRaza[];

  rasgoSubraza: RasgoSubraza[];

  constructor(private dndService: DndService) { }

  ngOnInit() {
    this.getRazas();
  }

  getRazas() {
    this.dndService.getRazas()
      .subscribe(razas => this.razas = razas);
  }

  getRasgosRaza(id: number) {
    this.dndService.getRasgosRaza(id)
      .subscribe(rasgo => this.rasgoRaza = rasgo);
    this.mostrar = true;
    //console.log()
    if (this.subrazas === undefined || this.subrazas.length === 0) {
      this.mostrarSubraza = false;
      this.mostrarRasgoSubraza = false;
      this.elegido = true;
      this.razaCreacion = id;
      this.subRazaCreacion = null;
      //console.log("Raza elegida " + this.razaCreacion +" y subraza "+this.subRazaCreacion);
    } else {
      this.razaCreacion = id;
      this.subRazaCreacion = null;
      //console.log("Subraza eliminada " + this.subRazaCreacion + ", nueva raza elegida: " + this.razaCreacion);
    }
  }

  getSubrazas(id: number) {
    this.dndService.getSubrazas(id)
      .subscribe(subraza => this.subrazas = subraza);
    if (this.subrazas != undefined) {
      this.mostrarSubraza = true;
      this.elegido = false;
      this.mostrarRasgoSubraza=false;
    }
  }

  getRasgosSubraza(id: number) {
    this.dndService.getRasgosSubraza(id)
      .subscribe(rasgo => this.rasgoSubraza = rasgo);
    this.mostrarRasgoSubraza = true;
    this.elegido = true;
    this.subRazaCreacion = id;
    
   //console.log("Raza " + this.razaCreacion +" y subraza " + this.subRazaCreacion);
  }

  asignarRaza(idRaza, idSubraza){
    // console.log("Los datos guardados antes son raza " + this.razaCreacion +" y subraza " + this.subRazaCreacion);
    // console.log ("Crear Raza " + idRaza +" y subraza " + idSubraza);

    this.dndService.setRazaCreacion(idRaza);
    this.dndService.setSubRazaCreacion(idSubraza);
    this.dndService.setMensajeCreacion();

    // console.log ("Crear Raza " + this.dndService.getRazaCreacion() +" y subraza " + this.dndService.getSubRazaCreacion());
    console.log("Raza elegida");

  }

}
