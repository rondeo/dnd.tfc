import { Component, OnInit } from '@angular/core';
import { DndService } from 'src/app/services/dnd-service';
import { Raza } from 'src/app/objects/raza';
import { SubRaza } from 'src/app/objects/subRaza';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss']
})
export class DatosComponent implements OnInit {

  nivel = 1;

  experiencia = '0';

  razaElegida ='';

  razas: Raza[];

  subRazas: SubRaza[];

  constructor(private dndService: DndService) { }

  ngOnInit() {
    this.getRazas();
    this.getSubrazas();
  }

  getRazas() {
    this.dndService.getRazas()
      .subscribe(razas => this.razas = razas);
  }

  getSubrazas() {
    this.dndService.getAllSubrazas()
      .subscribe(subRazas => this.subRazas = subRazas);
  }

  calcularNivel() {
    let exp;
    exp = parseInt(this.experiencia);

    if (exp >= 0 && exp < 300) {
      this.nivel = 1;
      //this.dndService.setExperiencia(this.experiencia);
      //return this.nivel;
    } else if (exp >= 300 && exp < 900) {
      this.nivel = 2;
      //this.dndService.setExperiencia(this.experiencia);
      //return this.nivel;
    } else if (exp >= 900 && exp < 2700) {
      this.nivel = 3;
      //this.dndService.setExperiencia(this.experiencia);
      //return this.nivel;
    } else if (exp >= 2700 && exp < 6500) {
      this.nivel = 4;
      //this.dndService.setExperiencia(this.experiencia);
      //return this.nivel;
    } else if (exp >= 6500 && exp < 14000) {
      this.nivel = 5;
      //this.dndService.setExperiencia(this.experiencia);
      //return this.nivel;
    } else if (exp >= 14000 && exp < 23000) {
      this.nivel = 6;
      //this.dndService.setExperiencia(this.experiencia);
      //return this.nivel;
    } else if (exp >= 23000 && exp < 34000) {
      this.nivel = 7;
      //this.dndService.setExperiencia(this.experiencia);
      //return this.nivel;
    } else if (exp >= 34000 && exp < 48000) {
      this.nivel = 8;
      //this.dndService.setExperiencia(this.experiencia);
      //return this.nivel;
    } else if (exp >= 48000 && exp < 64000) {
      this.nivel = 9;
      //this.dndService.setExperiencia(this.experiencia);
      //return this.nivel;
    } else if (exp >= 64000 && exp < 85000) {
      this.nivel = 10;
      //this.dndService.setExperiencia(this.experiencia);
      //return this.nivel;
    } else if (exp >= 85000 && exp < 100000) {
      this.nivel = 11;
      //this.dndService.setExperiencia(this.experiencia);
      //return this.nivel;
    } else if (exp >= 100000 && exp < 120000) {
      this.nivel = 12;
      //this.dndService.setExperiencia(this.experiencia);
      //return this.nivel;
    } else if (exp >= 120000 && exp < 140000) {
      this.nivel = 13;
      //this.dndService.setExperiencia(this.experiencia);
      //return this.nivel;
    } else if (exp >= 140000 && exp < 165000) {
      this.nivel = 14;
      //this.dndService.setExperiencia(this.experiencia);
      //return this.nivel;
    } else if (exp >= 165000 && exp < 195000) {
      this.nivel = 15;
      //this.dndService.setExperiencia(this.experiencia);
      //return this.nivel;
    } else if (exp >= 195000 && exp < 225000) {
      this.nivel = 16;
      //this.dndService.setExperiencia(this.experiencia);
      //return this.nivel;
    } else if (exp >= 225000 && exp < 265000) {
      this.nivel = 17;
      //this.dndService.setExperiencia(this.experiencia);
      //return this.nivel;
    } else if (exp >= 265000 && exp < 305000) {
      this.nivel = 18;
      //this.dndService.setExperiencia(this.experiencia);
      //return this.nivel;
    } else if (exp >= 305000 && exp < 355000) {
      this.nivel = 19;
      //this.dndService.setExperiencia(this.experiencia);
      //return this.nivel;
    } else if (exp >= 355000) {
      this.experiencia = '355000';
      this.nivel = 20;
      //this.dndService.setExperiencia(this.experiencia);
      //return this.nivel;
    }
    this.dndService.setExperiencia(this.experiencia);
    return this.nivel;
  }

  obtenerRaza(){

    this.subRazas.forEach(element => {
      if(element.nombreSubraza == this.razaElegida){
        this.dndService.setRazaElegida(element.idSubraza);
      }
    });
    
  }


}
