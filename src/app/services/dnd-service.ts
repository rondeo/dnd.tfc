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
import { SubRaza } from '../objects/subRaza';
import { RasgoSubraza } from '../objects/rasgoSubraza';
import { Personaje } from '../objects/personaje';
import { PERSONAJES } from '../objects/mock-personaje';
import { Jugador } from '../objects/jugador';
import { JUGADORES } from '../objects/mock-jugador';
import { CaracteristicasPersonaje } from '../objects/caracteristicasPersonaje';
import { CARACTERISTICASPERSONAJES } from '../objects/mock-caracteristicasPersonaje';
import { ALINEAMIENTOS } from '../objects/mock-alineamiento';
import { Alineamiento } from '../objects/alineamiento';

@Injectable({
  providedIn: 'root'
})
export class DndService {

  jugadores = JUGADORES;

  personajes = PERSONAJES;

  alineamientos = ALINEAMIENTOS;

  razas = RAZAS;
  rasgosRaza = RASGOSRAZA;

  subRazas = SUBRAZAS;
  rasgosSubraza = RASGOSSUBRAZA;

  clases = CLASES;
  rasgosClase = RASGOSCLASE;

  trasfondos = TRASFONDOS;

  caracteristicas = CARACTERISTICAS;

  caracteristicasPersonaje = CARACTERISTICASPERSONAJES;

  jugadorSesion = 1;
  
  experiencia = '0';

  razaElegida = 0;

  claseElegida = 0;

  personajeElegido = 0;

  idCreacion: number;

  nombreCreacion = null;

  alineamientoCreacion = null;

  experienciaCreacion = 0;

  razaCreacion = null;

  subRazaCreacion = null;

  jugadorCreacion = null;

  claseCreacion = null;

  trasfondoCreacion = null;

  statsCreacion: any[] = [
    { "id": 1, "valor": null },
    { "id": 2, "valor": null },
    { "id": 3, "valor": null },
    { "id": 4, "valor": null },
    { "id": 5, "valor": null },
    { "id": 6, "valor": null }
  ];

  personalidadCreacion = null;
  
  idealesCreacion = null;
  
  vinculosCreacion = null;
  
  defectosCreacion = null;

  mensajeCreacion = null;
  
  borrado = false;
  
  getIdCreacion() {
    return this.idCreacion;
  }

  setIdCreacion(value) {
    this.idCreacion = value;
  }

  getNombreCreacion() {
    return this.nombreCreacion;
  }

  setNombreCreacion(value) {
    this.nombreCreacion = value;
  }

  getAlineamientoCreacion() {
    return this.alineamientoCreacion;
  }

  setAlineamientoCreacion(value) {
    this.alineamientoCreacion = value;
  }

  getExperienciaCreacion() {
    return this.experienciaCreacion;
  }

  setExpecienciaCreacion(value) {
    this.experienciaCreacion = value;
  }

  getRazaCreacion() {
    return this.razaCreacion;
  }

  setRazaCreacion(value) {
    this.razaCreacion = value;
  }

  getSubRazaCreacion() {
    return this.subRazaCreacion;
  }

  setSubRazaCreacion(value) {
    this.subRazaCreacion = value;
  }

  getJugadorCreacion() {
    return this.jugadorCreacion;
  }

  setJugadorCreacion(value) {
    this.jugadorCreacion = value;
  }

  getClaseCreacion() {
    return this.claseCreacion;
  }

  setClaseCreacion(value) {
    this.claseCreacion = value;
  }

  getTrasfondoCreacion() {
    return this.trasfondoCreacion;
  }

  setTrasfondoCreacion(value) {
    this.trasfondoCreacion = value;
  }

  getStatsCreacion() {
    return this.statsCreacion;
  }

  setStatsCreacion(value) {
    this.statsCreacion = value;
  }

  getPersonalidadCreacion() {
    return this.personalidadCreacion;
  }

  setPersonalidadCreacion(value) {
    this.personalidadCreacion = value;
  }

  getIdealesCreacion() {
    return this.idealesCreacion;
  }

  setIdealesCreacion(value) {
    this.idealesCreacion = value;
  }

  getVinculosCreacion() {
    return this.vinculosCreacion;
  }

  setVinculosCreacion(value) {
    this.vinculosCreacion = value;
  }

  getDefectosCreacion() {
    return this.defectosCreacion;
  }

  setDefectosCreacion(value) {
    this.defectosCreacion = value;
  }

  setPersonajeElegido(value) {
    this.personajeElegido = value;
  }

  getPersonajeElegido() {
    return this.personajeElegido;
  }

  setRazaElegida(value) {
    this.razaElegida = value;
    //console.log('set service'+ this.razaElegida);
  }

  getRazaElegida() {
    //console.log('get service'+ this.razaElegida);
    return this.razaElegida;
  }

  setClaseElegida(value) {
    //console.log('set clase' + this.claseElegida)
    this.claseElegida = value;
  }

  getClaseElegida() {
    //console.log('get clase' + this.claseElegida)
    return this.claseElegida;
  }

  setExperiencia(value) {
    this.experiencia = value;
  }

  getExperiencia() {
    return this.experiencia;
  }

  constructor() { }

  getJugador(id: number): Observable<Jugador>{
    return of(JUGADORES.find(jugador => jugador.idJugador === id));
  }

  getPersonaje(id: number): Observable<Personaje> {
    return of(PERSONAJES.find(personaje => personaje.idPersonaje === id));
  }

  getRaza(id: number): Observable<Raza> {
    return of(RAZAS.find(raza => raza.idRaza === id));
  }

  getSubRaza(id: number): Observable<SubRaza> {
    return of(SUBRAZAS.find(subRaza => subRaza.idSubraza === id));
  }

  getClase(id: number): Observable<Clase> {
    return of(CLASES.find(Clase => Clase.idClase === id));
  }

  getPersonajes(): Observable<Personaje[]> {
    return of(this.personajes);
  }

  getAlineamientos(): Observable<Alineamiento[]>{
    return of(this.alineamientos);
  }

  getRazas(): Observable<Raza[]> {
    return of(this.razas);
  }

  getAllSubrazas(): Observable<SubRaza[]> {
    return of(this.subRazas);
  }

  getRasgosRaza(id: Number): Observable<RasgoRaza[]> {
    let finded = RASGOSRAZA.filter(rasgos => rasgos.idRaza === id);

    for (let i of this.razas) {
      if (i.idRaza === id) {
        return of(finded);
      }
    }
  }

  getSubrazas(id: Number): Observable<SubRaza[]> {
    let finded = SUBRAZAS.filter(subrazas => subrazas.idRaza === id);

    for (let i of this.razas) {
      if (i.idRaza === id) {
        return of(finded);
      }
    }
  }

  getRasgosSubraza(id: Number): Observable<RasgoSubraza[]> {
    let finded = RASGOSSUBRAZA.filter(rasgos => rasgos.idSubraza === id);

    for (let i of this.subRazas) {
      if (i.idSubraza === id) {
        return of(finded);
      }
    }
  }

  getPersonajesJugador(id: Number): Observable<Personaje[]>{
    let finded = PERSONAJES.filter(personaje => personaje.idJugador === id);

    for (let i of this.personajes) {
      if(id === 1){
        return of(this.personajes);
      }else if(id === i.idJugador){
        return of(finded);
      }
    }
    return of();
  }

  getClases(): Observable<Clase[]> {
    return of(this.clases);
  }

  getJugadores(): Observable<Jugador[]> {
    return of(this.jugadores);
  }

  getRasgosClase(id: Number): Observable<RasgoClase[]> {
    let finded = RASGOSCLASE.filter(rasgos => rasgos.idClase === id);

    for (let i of this.clases) {
      if (i.idClase === id) {
        return of(finded);
      }
    }
  }

  getRasgosClaseNivel(id: number, nivel: number): Observable<RasgoClase[]> {
    let finded = RASGOSCLASE.filter(rasgos => rasgos.idClase === id && rasgos.nivelClase <= nivel);
    // finded.filter(rasgos => rasgos.nivelClase <= nivel );
    // console.log("Encontrado " + nivel);
    // console.log(finded);
    for (let i of this.clases) {
      if (i.idClase === id) {
        return of(finded);
      }
    }
  }

  getTrasfondos(): Observable<Trasfondo[]> {
    return of(this.trasfondos);
  }

  getCaracteristicas(): Observable<Caracteristica[]> {
    return of(this.caracteristicas);
  }

  getCaracteristicasPersonajes(): Observable<CaracteristicasPersonaje[]> {
    return of(this.caracteristicasPersonaje);
  }

  /* getCaracteristicasPersonaje(id: number): Observable<CaracteristicasPersonaje[]>{
    return of(CARACTERISTICASPERSONAJES.findAll(this.caracteristicasPersonaje))
  } */

  // crearPersonaje(id: number, nombre: String, exp: number, align: String, raza: number, subraza: number, jugador: number, clase: number, trasfondo: number, stats: any[]){
    
  // }

  crearPersonaje(personaje: Personaje){
    this.personajes.push(personaje);
  }

  asignarStatsPersonaje(id: number, personaje: number, stat: String){
    this.caracteristicasPersonaje.push({
      "idCaracteristica": id,
      "idPersonaje": personaje,
      "puntuacionCaracteristica": stat
    })
  }

  getMensajeCreacion(){
    
    return this.mensajeCreacion;

  }

  setMensajeCreacion(){
    this.mensajeCreacion = 'Actualmente te falta por introducir: ';
    if(this.nombreCreacion == null){
      this.mensajeCreacion += 'información, ';

    }

    if(this.razaCreacion == null){
      this.mensajeCreacion += 'raza, ';
    }

    if(this.claseCreacion == null){
      this.mensajeCreacion += 'clase, ';
    }

    if(this.trasfondoCreacion == null){
      this.mensajeCreacion += 'trasfondo, ';
    }

    if(this.statsCreacion[0].valor === null){
      this.mensajeCreacion += 'stats';
    }

    if(this.nombreCreacion !== null && this.razaCreacion !== null && this.claseCreacion !== null 
      && this.trasfondoCreacion !== null && this.statsCreacion[0].valor !== null){
        // console.log(this.statsCreacion)
      this.mensajeCreacion = 'Perfecto, ya lo tienes todo, puedes crear tu personaje'
    }
  }

  getJugadorSesion(){
    return this.jugadorSesion;
  }

  setJugadorSesion(value){
    this.jugadorSesion = value;
  }

  crearJugador(jugador: Jugador): Observable<any>{
    localStorage.setItem("jugador", JSON.stringify( jugador));
    return of(this.jugadores.push(jugador));
  }

  borrarSi(){
    this.borrado = true;
  }

  borrarNo(){
    this.borrado = false;
  }

}
