import { Component, OnInit } from '@angular/core';
import { Raza } from 'src/app/objects/raza';
import { DndService } from 'src/app/services/dnd-service';
import { RasgoRaza } from 'src/app/objects/rasgoRaza';
import { SubRaza } from 'src/app/objects/subRaza';
import { RasgoSubraza } from 'src/app/objects/rasgoSubraza';

@Component({
  selector: 'app-crear-raza',
  templateUrl: './crear-raza.component.html',
  styleUrls: ['./crear-raza.component.scss']
})
export class CrearRazaComponent implements OnInit {

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

  getRasgosRaza(id: Number) {
    this.dndService.getRasgosRaza(id)
      .subscribe(rasgo => this.rasgoRaza = rasgo);
    this.mostrar = true;
    console.log()
    if (this.subrazas === undefined || this.subrazas.length === 0) {
      this.mostrarSubraza = false;
      this.mostrarRasgoSubraza = false;
      this.elegido = true;
    }
  }

  getSubrazas(id: Number) {
    this.dndService.getSubrazas(id)
      .subscribe(subraza => this.subrazas = subraza);
    if (this.subrazas != undefined) {
      this.mostrarSubraza = true;
      this.elegido = false;
      this.mostrarRasgoSubraza=false;
    }
  }

  getRasgosSubraza(id: Number) {
    this.dndService.getRasgosSubraza(id)
      .subscribe(rasgo => this.rasgoSubraza = rasgo);
    this.mostrarRasgoSubraza = true;
    this.elegido = true;
  }

}
