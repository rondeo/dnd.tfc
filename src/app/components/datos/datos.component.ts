import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DndService } from '../../services/dnd-service';
import { Raza } from '../../objects/raza';
import { SubRaza } from '../../objects/subRaza';
import { Personaje } from '../../objects/personaje';
import { Jugador } from '../../objects/jugador';
import { Clase } from '../../objects/clase';
import { Trasfondo } from '../../objects/trasfondo';
import { Alineamiento } from '../../objects/alineamiento';

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

  claseCrear = null;

  trasfondoPersonaje = '';

  trasfondoCrear = null;

  nombreJugador = '';

  razaPersonaje = '';

  razaCrear = null;

  subRazaCrear = null;

  alineamientoPersonaje = '';

  alineamientoCrear = null;

  nivel = 1;

  experiencia = '0';

  arrayRazas: String[] = [];

  personajes: Personaje[];

  razas: Raza[];

  subRazas: SubRaza[];

  jugadores: Jugador[];

  clases: Clase[];

  trasfondos: Trasfondo[];

  alineamientos: Alineamiento[];

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
    this.getPersonajes();
    this.getPersonaje();
    this.obtenerClase();
    this.obtenerRaza();
    this.llenarRazas();
    this.getAlineamientos();
  }

  getRazas() {
    this.dndService.getRazas()
      .subscribe(razas => this.razas = razas);
  }

  getSubrazas() {
    this.dndService.getAllSubrazas()
      .subscribe(subRazas => this.subRazas = subRazas);
  }

  getClases() {
    this.dndService.getClases()
      .subscribe(clases => this.clases = clases);
  }

  getJugadores() {
    this.dndService.getJugadores()
      .subscribe(jugadores => this.jugadores = jugadores);
  }

  getPersonajes() {
    this.dndService.getPersonajes()
      .subscribe(personajes => this.personajes = personajes);

  }

  getTrasfondos() {
    this.dndService.getTrasfondos()
      .subscribe(trasfondos => this.trasfondos = trasfondos);
  }

  getAlineamientos() {
    this.dndService.getAlineamientos()
      .subscribe(alineamientos => this.alineamientos = alineamientos);
  }

  getPersonaje() {
    const id = this.route.snapshot.paramMap.get('id');
    //console.log(this.route.snapshot.paramMap.get('id'))
    if (id == null) {
      this.navegarHoja = true;
      this.navegarPersonaje = false;
      this.dndService.setPersonajeElegido(0);
      this.dndService.getPersonaje(this.dndService.getJugadorSesion());
      this.dndService.getJugador(this.dndService.getJugadorSesion())
        .subscribe(jugador => this.nombreJugador = jugador.nombreJugador.toString());
    } else {
      //console.log("Ha entrado aquí porque patata")
      this.dndService.getPersonaje(parseInt(id))
        .subscribe(personaje => this.personaje = personaje);
      this.getDatos(this.personaje);
      this.dndService.setPersonajeElegido(parseInt(id));
      this.navegarHoja = false;
      this.navegarPersonaje = true;
    }

  }

  getDatos(personaje: Personaje) {

    this.nombrePersonaje = (personaje.nombrePersonaje).toString();
    this.clasePersonaje = (this.clases.find(clase => clase.idClase === personaje.idClase).nombreClase).toString();
    this.trasfondoPersonaje = (this.trasfondos.find(trasfondo => trasfondo.idTrasfondo === personaje.idTrasfondo).nombreTrasfondo).toString();
    this.nombreJugador = (this.jugadores.find(jugador => jugador.idJugador === personaje.idJugador).nombreJugador).toString();
    if (personaje.idSubraza === null || personaje.idSubraza === undefined) {
      this.razaPersonaje = (this.razas.find(raza => raza.idRaza === personaje.idRaza).nombreRaza).toString();
    } else {
      this.razaPersonaje = (this.subRazas.find(subRaza => subRaza.idSubraza === personaje.idSubraza).nombreSubraza).toString();
    }
    this.alineamientoPersonaje = (personaje.alineamiento).toString();
    this.experiencia = (personaje.experiencia).toString();
    this.calcularNivel();
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

    // this.llenarRazas();

    // console.log(this.razaPersonaje);

    for (let i = 0; i < this.razas.length; i++) {
      for (let j = 0; j < this.subRazas.length; j++) {
        if (this.razas[i].nombreRaza == this.razaPersonaje) {
          this.dndService.setRazaElegida(this.razas[i].idRaza);
          this.razaCrear = this.razas[i].idRaza;
          //console.log(this.razaPersonaje + ' raza ' + this.razas[i].idRaza)
          return;
        } else if (this.subRazas[j].nombreSubraza == this.razaPersonaje) {
          this.dndService.setRazaElegida(this.subRazas[j].idSubraza);
          this.razaCrear = this.subRazas[j].idRaza;
          this.subRazaCrear = this.subRazas[j].idSubraza;
          //console.log(this.razaPersonaje + ' subraza ' + this.subRazas[j].idSubraza)
          return;
        } else {
          // console.log("Se limpia la raza");
          this.limpiarRaza();
          this.razaCrear = null;
          this.subRazaCrear = null;
        }

      }

    }

    // this.razas.forEach(raza => {
    //   if(raza.nombreRaza == this.razaPersonaje){
    //     this.dndService.setRazaElegida(raza.idRaza);
    //     console.log(this.razaPersonaje + raza.idRaza)
    //     return;
    //   }else{
    //     this.limpiarRaza();
    //   }
    // });

    // this.subRazas.forEach(subraza => {
    //   if (subraza.nombreSubraza == this.razaPersonaje) {
    //     this.dndService.setRazaElegida(subraza.idSubraza);
    //     console.log(this.razaPersonaje + subraza.idSubraza)
    //     return;
    //   }
    // });

  }

  obtenerClase() {

    // console.log(this.clasePersonaje);

    for (let i = 0; i < this.clases.length; i++) {
      if (this.clases[i].nombreClase == this.clasePersonaje) {
        this.dndService.setClaseElegida(this.clases[i].idClase);
        this.claseCrear = this.clases[i].idClase;
        //console.log(this.clasePersonaje);
        return;
      } else {
        this.limpiarClase();
        this.claseCrear = null;
      }
    }

    // this.clases.forEach(clase =>{
    //   if(clase.nombreClase == this.clasePersonaje){
    //     this.dndService.setClaseElegida(clase.idClase);
    //     //console.log(this.clasePersonaje);
    //     return;
    //   }else{
    //     this.limpiarClase();
    //   }
    // });

  }

  obtenerTrasfondo() {
    for (let i = 0; i < this.trasfondos.length; i++) {
      if (this.trasfondos[i].nombreTrasfondo == this.trasfondoPersonaje) {
        //console.log(this.clasePersonaje);
        this.trasfondoCrear = this.trasfondos[i].idTrasfondo;
        return;
      } else {
        this.limpiarClase();
        this.trasfondoCrear = null;
      }

    }
  }

  limpiarClase() {
    this.dndService.setClaseElegida(0);
  }

  limpiarRaza() {
    this.dndService.setRazaElegida(0);
  }

  llenarRazas() {

    let bool = false;

    let nombreArray = [];
    let idRazaArray = [];
    let idSubrazaArray = [];

    // let idArray = [{
    //   "raza": number;
    //   "subraza": number;
    // }
    // ];

    for (let i = 0; i < this.razas.length; i++) {
      this.arrayRazas.push(this.razas[i].nombreRaza);
      idRazaArray.push(this.razas[i].idRaza);
      nombreArray.push(this.razas[i].nombreRaza);
    }

    for (let i = 0; i < this.subRazas.length; i++) {
      this.arrayRazas.push(this.subRazas[i].nombreSubraza);
      idSubrazaArray.push(this.subRazas[i].idRaza);

      // for (let j = 0; j < this.razas.length; j++) {
      //     this.arrayRazas.push(this.razas[j].nombreRaza);
      //     // array.push(this.subRazas[j].idRaza);

      // }
    }

    // for (let i = 0; i < array.length; i++) {
    //   for (let j = 0; j < this.razas.length; j++) {
    //     if(array[i] === this.razas[j].idRaza ){
    //       this.arrayRazas.push(this.razas[j].nombreRaza);
    //     }
    //   }
    // }

    // for (let i = 0; i < this.arrayRazas.length; i++) {
    //   for (let j = 0; j < array.length; j++) {

    //   }

    // }
    for (let i = 0; i < this.arrayRazas.length; i++) {
      for (let j = 0; j < idRazaArray.length; j++) {
        for (let k = 0; k < idSubrazaArray.length; k++) {
          if (idRazaArray[j] === idSubrazaArray[k] && nombreArray[j] === this.arrayRazas[i]) {
            this.arrayRazas.splice(i, 1);
          }
        }
      }
    }

    this.arrayRazas.sort();

    for (let i = 0; i < this.arrayRazas.length; i++) {

      return this.arrayRazas[i];

    }
  }

  deleteAll() {
    this.nombrePersonaje = '';

    this.clasePersonaje = '';

    this.limpiarClase();

    this.trasfondoPersonaje = '';

    this.razaPersonaje = '';

    this.limpiarRaza();

    this.alineamientoPersonaje = '';

    this.experiencia = '0';

    this.dndService.borrarSi();
  }

  crearPersonaje() {

    let array: Personaje;

    let id = this.genID(this.personajes);

    if (this.nombrePersonaje === '') {
      alert("Falta por introducir el nombre");
      return;
    } else if (this.alineamientoPersonaje === '') {
      alert("Falta por introducir el alineamiento");
      return;
    } else if (this.razaPersonaje === '') {
      alert("Falta por introducir la raza");
      return;
    } else if (this.clasePersonaje === '') {
      alert("Falta por introducir la clase");
      return;
    } else if (this.trasfondoPersonaje === '') {
      alert("Falta por introducir el trasfondo");
      return;
    }

    let raza = this.dndService.getRazaElegida();

    array = {
      idPersonaje: id, nombrePersonaje: this.nombrePersonaje, experiencia: parseInt(this.experiencia),
      alineamiento: this.alineamientoPersonaje, idRaza: this.razaCrear, idSubraza: this.subRazaCrear,
      idJugador: this.dndService.getJugadorSesion(), idClase: this.claseCrear, idTrasfondo: this.trasfondoCrear, personalidad: null,
      ideales: null, vinculos: null, defectos: null
    }

    this.dndService.crearPersonaje(array);

    // console.log("done");

    // console.log(this.personajes)

  }

  genID(personajes: Personaje[]): number {
    return personajes.length > 0 ? Math.max(...personajes.map(personaje => personaje.idPersonaje)) + 1 : 1;
  }

}
