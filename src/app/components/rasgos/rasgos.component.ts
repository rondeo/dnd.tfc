import { Component, OnInit } from '@angular/core';
import { RasgoRaza } from 'src/app/objects/rasgoRaza';
import { RasgoSubraza } from 'src/app/objects/rasgoSubraza';
import { DndService } from 'src/app/services/dnd-service';
import { Personaje } from 'src/app/objects/personaje';
import { RasgoClase } from 'src/app/objects/rasgoClase';
import { Raza } from 'src/app/objects/raza';
import { SubRaza } from 'src/app/objects/subRaza';
import { Clase } from 'src/app/objects/clase';

@Component({
  selector: 'app-rasgos',
  templateUrl: './rasgos.component.html',
  styleUrls: ['./rasgos.component.scss']
})
export class RasgosComponent implements OnInit {

  personaje: Personaje;

  raza: Raza;

  subRaza: SubRaza;

  clase: Clase;

  rasgosRaza: RasgoRaza[];

  rasgosSubraza: RasgoSubraza[];

  rasgosClase: RasgoClase[];

  razaMostrar = 0;

  subRazaMostrar = 0;

  claseMostrar = 0;

  idRaza = 0;

  idClase = 0;

  constructor(private dndService: DndService) { }

  ngOnInit() {
    this.personajeElegido();
  }

  razaElegida() {

    this.razaMostrar = 0;
    this.subRazaMostrar = 0;
    this.claseMostrar = 0;
    this.subRaza = null;
    this.rasgosSubraza = null;


    this.idRaza = this.dndService.getRazaElegida();


    this.idClase = this.dndService.getClaseElegida();

    //console.log(this.dndService.getRazaElegida());

    //console.log(this.idClase);

    if (this.idRaza != null && this.idRaza != undefined && this.idRaza != 0) {
      this.getSubRaza(this.idRaza);
      if (this.subRaza != null) {
        this.subRazaMostrar = this.subRaza.idSubraza;
        this.razaMostrar = this.subRaza.idRaza;
      } else {
        this.razaMostrar = this.idRaza;
      }

    }

    if (this.idClase != null && this.idClase != undefined && this.idClase != 0) {
      this.claseMostrar = this.idClase;

    }

    this.obtenerRasgos();

    // this.dndService.setRazaElegida(0);
    // this.dndService.setClaseElegida(0);
  }

  personajeElegido() {
    this.razaMostrar = 0;
    this.subRazaMostrar = 0;
    this.claseMostrar = 0;

    const id = this.dndService.getPersonajeElegido();

    if (id != null && id != undefined && id != 0) {
      this.getPersonaje(id);


      this.razaMostrar = this.personaje.idRaza
      this.subRazaMostrar = this.personaje.idSubraza
      this.claseMostrar = this.personaje.idClase;

      //console.log(this.subraza)

      this.obtenerRasgos();

    } 
    // else {
    //   this.razaElegida();
    // }
  }

  obtenerRasgos() {
    if (this.razaMostrar != null && this.razaMostrar != undefined && this.razaMostrar != 0) {
      this.getRasgosRaza(this.razaMostrar);
      //console.log(this.razaMostrar);
    }
    if (this.subRazaMostrar != null && this.subRazaMostrar != undefined && this.subRazaMostrar != 0) {
      //console.log(this.subraza)
      this.getRasgosSubraza(this.subRazaMostrar);
    }
    if (this.claseMostrar != null && this.claseMostrar != undefined && this.claseMostrar != 0) {
      this.getRasgosClase(this.claseMostrar);
    }
  }

  getPersonaje(id: number) {
    this.dndService.getPersonaje(id)
      .subscribe(personaje => this.personaje = personaje);
  }

  getRaza(id: number) {
    this.dndService.getRaza(id)
      .subscribe(raza => this.raza = raza);
  }

  getSubRaza(id: number) {
    this.dndService.getSubRaza(id)
      .subscribe(subRaza => this.subRaza = subRaza);
  }

  getClase(id: number) {
    this.dndService.getClase(id)
      .subscribe(clase => this.clase = clase);
  }

  /* getRazaElegida(){
    this.razaElegida = this.dndService.getRazaElegida();
    console.log(this.razaElegida);
  } */


  getRasgosRaza(id: number) {
    this.dndService.getRasgosRaza(id)
      .subscribe(rasgo => this.rasgosRaza = rasgo);
  }


  getRasgosSubraza(id: number) {
    this.dndService.getRasgosSubraza(id)
      .subscribe(rasgo => this.rasgosSubraza = rasgo);
  }

  getRasgosClase(id: number) {
    this.dndService.getRasgosClase(id)
      .subscribe(rasgo => this.rasgosClase = rasgo);
  }

  mostrarCosas() {

  }

}
