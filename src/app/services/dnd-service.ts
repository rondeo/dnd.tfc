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

@Injectable({
  providedIn: 'root'
})
export class DndService {

  razas = RAZAS;
  rasgosRaza = RASGOSRAZA;

  clases = CLASES;
  rasgosClase = RASGOSCLASE;

  trasfondos = TRASFONDOS;

  constructor() { }

  getRazas(): Observable<Raza[]>{
    return of(this.razas);
  }

  getRasgosRaza(id: Number): Observable<RasgoRaza[]>{
    let finded = RASGOSRAZA.filter(rasgos => rasgos.idRaza === id);

    for (let i of this.razas) {
      if(i.idRaza === id){
        return of(finded);
      }
    }
  }

  getClases(): Observable<Clase[]>{
    return of(this.clases);
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

}
