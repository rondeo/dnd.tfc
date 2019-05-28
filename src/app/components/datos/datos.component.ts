import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DndService } from 'src/app/services/dnd-service';
import { Raza } from 'src/app/objects/raza';
import { SubRaza } from 'src/app/objects/subRaza';
import { Personaje } from 'src/app/objects/personaje';
import { Jugador } from 'src/app/objects/jugador';
import { Clase } from 'src/app/objects/clase';
import { Trasfondo } from 'src/app/objects/trasfondo';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss']
})
export class DatosComponent implements OnInit {

  navegarHoja = false;

  navegarPersonaje = false;

  personaje: Personaje;

  nombrePersonaje = '';

  clasePersonaje = '';

  trasfondoPersonaje = '';

  nombreJugador = '';

  razaPersonaje = '';

  alineamientoPersonaje = '';

  nivel = 1;

  experiencia = '0';

  personajes: Personaje[];

  razas: Raza[];

  subRazas: SubRaza[];

  jugadores: Jugador[];

  clases: Clase[];

  trasfondos: Trasfondo[];

  constructor(
    private route: ActivatedRoute,
    private dndService: DndService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getRazas();
    this.getSubrazas();
    this.getClases();
    this.getJugadores();
    this.getTrasfondos();
    this.getPersonaje();
  }

  getRazas() {
    this.dndService.getRazas()
      .subscribe(razas => this.razas = razas);
  }

  getSubrazas() {
    this.dndService.getAllSubrazas()
      .subscribe(subRazas => this.subRazas = subRazas);
  }

  getClases(){
    this.dndService.getClases()
      .subscribe(clases => this.clases = clases);
  }

  getJugadores(){
    this.dndService.getJugadores()
      .subscribe(jugadores => this.jugadores = jugadores);
  }

  getTrasfondos(){
    this.dndService.getTrasfondos()
      .subscribe(trasfondos => this.trasfondos = trasfondos);
  }

  
  getPersonaje() {
    const id = this.route.snapshot.paramMap.get('id');
    //console.log(this.route.snapshot.paramMap.get('id'))
    if(id == null){
      this.navegarHoja=true;
      this.navegarPersonaje=false;
    } else {
      //console.log("Ha entrado aquí porque patata")
      this.dndService.getPersonaje(parseInt(id))
        .subscribe(personaje => this.personaje = personaje);
      this.getDatos(this.personaje);
      this.dndService.setPersonajeElegido(parseInt(id));
      this.navegarHoja=false;
      this.navegarPersonaje=true;
    }

  }

  getDatos(personaje: Personaje){

    this.nombrePersonaje = (personaje.nombrePersonaje).toString();
    this.clasePersonaje = (this.clases.find(clase => clase.idClase === personaje.idClase).nombreClase).toString();
    this.trasfondoPersonaje = (this.trasfondos.find(trasfondo => trasfondo.idTrasfondo === personaje.idTrasfondo).nombreTrasfondo).toString();
    this.nombreJugador = (this.jugadores.find(jugador=>jugador.idJugador === personaje.idJugador).nombreJugador).toString();
    if(personaje.idSubraza === null || personaje.idSubraza === undefined ){
      this.razaPersonaje = (this.razas.find(raza => raza.idRaza === personaje.idRaza).nombreRaza).toString();
    } else {
      this.razaPersonaje = (this.subRazas.find(subRaza => subRaza.idSubraza === personaje.idSubraza).nombreSubraza).toString();
    }
    this.alineamientoPersonaje = (personaje.alineamiento).toString();
    this.experiencia = (personaje.experiencia).toString();
    this.calcularNivel() ;
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

  obtenerRaza() {

    this.razas.forEach(raza => {
      if(raza.nombreRaza == this.razaPersonaje){
        this.dndService.setRazaElegida(raza.idRaza);
        //console.log(this.razaPersonaje)
      }
    });

    this.subRazas.forEach(subraza => {
      if (subraza.nombreSubraza == this.razaPersonaje) {
        this.dndService.setRazaElegida(subraza.idSubraza);
        //console.log(this.razaPersonaje)
      }
    });

  }

  obtenerClase(){
    this.clases.forEach(clase =>{
      if(clase.nombreClase == this.clasePersonaje){
        this.dndService.setClaseElegida(clase.idClase);
        console.log(this.clasePersonaje)
      }
    });
  }


}
