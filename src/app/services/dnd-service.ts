import { Injectable } from '@angular/core';
import { RAZAS } from '../objects/mock-raza';
import { Observable, of } from 'rxjs';
import { Raza } from '../objects/raza';
import { RASGOSRAZA } from '../objects/mock-rasgoRaza';
import { RasgoRaza } from '../objects/rasgoRaza';
import { CLASES } from '../objects/mock-clases';
import { RASGOSCLASE } from '../objects/mock-rasgoClase';
import { Clase } from '../objects/clase';
import { RasgoClase } from '../objects/rasgoClase';
import { TRASFONDOS } from '../objects/mock-trasfondo';
import { Trasfondo } from '../objects/trasfondo';
import { Caracteristica } from '../objects/caracteristica';
import { CARACTERISTICAS } from '../objects/mock-caracteristica';
import { RASGOSSUBRAZA } from '../objects/mock-rasgoSubraza';
import { SUBRAZAS } from '../objects/mock-subRaza';
import { findReadVarNames } from '@angular/compiler/src/output/output_ast';
import { SubRaza } from '../objects/subRaza';
import { RasgoSubraza } from '../objects/rasgoSubraza';
import { Personaje } from '../objects/personaje';
import { PERSONAJES } from '../objects/mock-personaje';
import { Jugador } from '../objects/jugador';
import { JUGADORES } from '../objects/mock-jugador';
import { CaracteristicasPersonaje } from '../objects/caracteristicasPersonaje';
import { CARACTERISTICASPERSONAJES } from '../objects/mock-caracteristicasPersonaje';

@Injectable({
  providedIn: 'root'
})
export class DndService {

  jugadores = JUGADORES;

  personajes = PERSONAJES;

  razas = RAZAS;
  rasgosRaza = RASGOSRAZA;

  subRazas = SUBRAZAS;
  rasgosSubraza= RASGOSSUBRAZA;

  clases = CLASES;
  rasgosClase = RASGOSCLASE;

  trasfondos = TRASFONDOS;

  caracteristicas = CARACTERISTICAS;

  caracteristicasPersonaje = CARACTERISTICASPERSONAJES;

  experiencia = '0';

  razaElegida = 0;

  claseElegida = 0;

  personajeElegido = 0;

  setPersonajeElegido(value){
    this.personajeElegido = value;
  }

  getPersonajeElegido(){
    return this.personajeElegido;
  }

  setRazaElegida(value){
    this.razaElegida = value;
    //console.log('set service'+ this.razaElegida);
  }

  getRazaElegida(){
    //console.log('get service'+ this.razaElegida);
    return this.razaElegida;
  }

  setClaseElegida(value){
    //console.log('set clase' + this.claseElegida)
    this.claseElegida = value;
  }

  getClaseElegida(){
    //console.log('get clase' + this.claseElegida)
    return this.claseElegida;
  }

  setExperiencia(value){
    this.experiencia = value;
  }

  getExperiencia(){
    return this.experiencia;
  }

  constructor() { }

  getPersonaje(id: number): Observable<Personaje>{
    return of(PERSONAJES.find(personaje => personaje.idPersonaje === id));
  }

  getRaza(id: number): Observable<Raza>{
    return of(RAZAS.find(raza => raza.idRaza===id));
  }

  getSubRaza(id: number): Observable<SubRaza>{
    return of(SUBRAZAS.find(subRaza => subRaza.idSubraza === id));
  }

  getClase(id: number): Observable<Clase>{
    return of(CLASES.find(Clase => Clase.idClase===id));
  }

  getPersonajes(): Observable<Personaje[]>{
    return of(PERSONAJES);
  }

  getRazas(): Observable<Raza[]>{
    return of(this.razas);
  }

  getAllSubrazas(): Observable<SubRaza[]>{
    return of(this.subRazas);
  }

  getRasgosRaza(id: Number): Observable<RasgoRaza[]>{
    let finded = RASGOSRAZA.filter(rasgos => rasgos.idRaza === id);

    for (let i of this.razas) {
      if(i.idRaza === id){
        return of(finded);
      }
    }
  }

  getSubrazas(id: Number): Observable<SubRaza[]>{
    let finded = SUBRAZAS.filter(subrazas => subrazas.idRaza === id);

    for (let i of this.razas) {
      if(i.idRaza === id){
        return of(finded);
      }
    }
  }

  getRasgosSubraza(id: Number): Observable<RasgoSubraza[]>{
    let finded = RASGOSSUBRAZA.filter(rasgos => rasgos.idSubraza === id);

    for (let i of this.subRazas) {
      if(i.idSubraza === id){
        return of(finded);
      }
    }
  }

  getClases(): Observable<Clase[]>{
    return of(this.clases);
  }

  getJugadores(): Observable<Jugador[]>{
    return of(this.jugadores);
  }

  getRasgosClase(id: Number): Observable<RasgoClase[]>{
    let finded = RASGOSCLASE.filter(rasgos => rasgos.idClase === id);

    for (let i of this.clases) {
      if(i.idClase === id){
        return of(finded);
      }
    }
  }

  getTrasfondos(): Observable<Trasfondo[]>{
    return of(this.trasfondos);
  }

  getCaracteristicas(): Observable<Caracteristica[]>{
    return of(this.caracteristicas);
  }

  getCaracteristicasPersonajes(): Observable<CaracteristicasPersonaje[]>{
    return of(this.caracteristicasPersonaje);
  }

  /* getCaracteristicasPersonaje(id: number): Observable<CaracteristicasPersonaje[]>{
    return of(CARACTERISTICASPERSONAJES.findAll(this.caracteristicasPersonaje))
  } */

}
