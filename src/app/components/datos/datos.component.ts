import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss']
})
export class DatosComponent implements OnInit {

  nivel = 1;

  experiencia = '0';

  constructor() { }

  ngOnInit() {
  }

  calcularNivel() {
    let exp;
    exp = parseInt(this.experiencia);

    if (exp >= 0 && exp < 300) {
      this.nivel = 1;
      return this.nivel;
    } else if (exp >= 300 && exp < 900) {
      this.nivel = 2;
      return this.nivel;
    } else if (exp >= 900 && exp < 2700) {
      this.nivel = 3;
      return this.nivel;
    } else if (exp >= 2700 && exp < 6500) {
      this.nivel = 4;
      return this.nivel;
    } else if (exp >= 6500 && exp < 14000) {
      this.nivel = 5;
      return this.nivel;
    } else if (exp >= 14000 && exp < 23000) {
      this.nivel = 6;
      return this.nivel;
    } else if (exp >= 23000 && exp < 34000) {
      this.nivel = 7;
      return this.nivel;
    } else if (exp >= 34000 && exp < 48000) {
      this.nivel = 8;
      return this.nivel;
    } else if (exp >= 48000 && exp < 64000) {
      this.nivel = 9;
      return this.nivel;
    } else if (exp >= 64000 && exp < 85000) {
      this.nivel = 10;
      return this.nivel;
    } else if (exp >= 85000 && exp < 100000) {
      this.nivel = 11;
      return this.nivel;
    } else if (exp >= 100000 && exp < 120000) {
      this.nivel = 12;
      return this.nivel;
    } else if (exp >= 120000 && exp < 140000) {
      this.nivel = 13;
      return this.nivel;
    } else if (exp >= 140000 && exp < 165000) {
      this.nivel = 14;
      return this.nivel;
    } else if (exp >= 165000 && exp < 195000) {
      this.nivel = 15;
      return this.nivel;
    } else if (exp >= 195000 && exp < 225000) {
      this.nivel = 16;
      return this.nivel;
    } else if (exp >= 225000 && exp < 265000) {
      this.nivel = 17;
      return this.nivel;
    } else if (exp >= 265000 && exp < 305000) {
      this.nivel = 18;
      return this.nivel;
    } else if (exp >= 305000 && exp < 355000) {
      this.nivel = 19;
      return this.nivel;
    } else if (exp >= 355000) {
      this.experiencia = '355000';
      this.nivel = 20;
      return this.nivel;
    }
  }

}
