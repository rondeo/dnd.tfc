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

  experiencia = '';

  nivel = 0;

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
    this.raza = null;
    this.rasgosRaza = null;
    this.experiencia = this.dndService.getExperiencia();


    this.idRaza = this.dndService.getRazaElegida();


    this.idClase = this.dndService.getClaseElegida();

    //console.log(this.dndService.getRazaElegida());

    //console.log(this.idClase);

    if (this.idRaza != null && this.idRaza != undefined && this.idRaza != 0) {
      this.getSubRaza(this.idRaza);
      if (this.subRaza != null) {
        this.subRazaMostrar = this.subRaza.idSubraza;
        this.razaMostrar = this.subRaza.idRaza;
      } else{
        this.razaMostrar = this.idRaza;
      } 

    }

    this.calcularNivel();

    // console.log(this.nivel);

    if (this.idClase != null && this.idClase != undefined && this.idClase != 0) {
      this.claseMostrar = this.idClase;
    }

    this.obtenerRasgos();

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
      this.getRasgosClaseNivel(this.claseMostrar, this.nivel);
      // console.log(this.rasgosClase);
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

  getRasgosClaseNivel(id: number, nivel: number) {
    this.dndService.getRasgosClaseNivel(id, nivel)
      .subscribe(rasgo => this.rasgosClase = rasgo);
  }

  mostrarCosas() {

  }

  calcularNivel() {
    let exp;
    exp = parseInt(this.experiencia);

    if (exp >= 0 && exp < 300) {
      this.nivel = 1;
    } else if (exp >= 300 && exp < 900) {
      this.nivel = 2;
    } else if (exp >= 900 && exp < 2700) {
      this.nivel = 3;
    } else if (exp >= 2700 && exp < 6500) {
      this.nivel = 4;
    } else if (exp >= 6500 && exp < 14000) {
      this.nivel = 5;
    } else if (exp >= 14000 && exp < 23000) {
      this.nivel = 6;
    } else if (exp >= 23000 && exp < 34000) {
      this.nivel = 7;
    } else if (exp >= 34000 && exp < 48000) {
      this.nivel = 8;
    } else if (exp >= 48000 && exp < 64000) {
      this.nivel = 9;
    } else if (exp >= 64000 && exp < 85000) {
      this.nivel = 10;
    } else if (exp >= 85000 && exp < 100000) {
      this.nivel = 11;
    } else if (exp >= 100000 && exp < 120000) {
      this.nivel = 12;
    } else if (exp >= 120000 && exp < 140000) {
      this.nivel = 13;
    } else if (exp >= 140000 && exp < 165000) {
      this.nivel = 14;
    } else if (exp >= 165000 && exp < 195000) {
      this.nivel = 15;
    } else if (exp >= 195000 && exp < 225000) {
      this.nivel = 16;
    } else if (exp >= 225000 && exp < 265000) {
      this.nivel = 17;
    } else if (exp >= 265000 && exp < 305000) {
      this.nivel = 18;
    } else if (exp >= 305000 && exp < 355000) {
      this.nivel = 19;
    } else if (exp >= 355000) {
      this.experiencia = '355000';
      this.nivel = 20;
    }
    this.dndService.setExperiencia(this.experiencia);
    return this.nivel;
  }

}
