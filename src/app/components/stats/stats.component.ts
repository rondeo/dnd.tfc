import { Component, OnInit, Input } from '@angular/core';
import { clearModulesForTest } from '@angular/core/src/linker/ng_module_factory_loader';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  fue = '';
  dex = '';
  con = '';
  int = '';
  sab = '';
  car = '';

  @Input() experiencia: string;
  competencia = 0;

  constructor() { }

  ngOnInit() {

  }

  calcularCompetencia() {
    let exp;
    exp = parseInt(this.experiencia);

    if (exp >= 0 && exp < 6500) {
      this.competencia = 2;
      return '+' + this.competencia;
    } else if (exp >= 6500 && exp < 48000) {
      this.competencia = 3;
      return '+' + this.competencia;
    } else if (exp >= 48000 && exp < 120000) {
      this.competencia = 4;
      return '+' + this.competencia;
    } else if (exp >= 120000 && exp < 225000) {
      this.competencia = 5;
      return '+' + this.competencia;
    } else if (exp >= 225000 && exp <= 355000) {
      this.competencia = 6;
      return '+' + this.competencia;
    }
  }

  calcularFue() {

    return this.calculo(this.fue);

  }

  calcularDex() {

    return this.calculo(this.dex);

  }

  calcularCon() {

    return this.calculo(this.con);

  }

  calcularInt() {

    return this.calculo(this.int);

  }

  calcularSab() {

    return this.calculo(this.sab);

  }

  calcularCar() {

    return this.calculo(this.car);

  }

  calculo(numero: string) {

    let mod;

    mod = parseInt(numero);


    if (mod > 30) {
      mod = 30;
    } else if (mod <= 0) {
      return;
    }
    if (!isNaN(mod)) {
      mod = mod - 10;

      if (mod % 2 == 0) {
        mod = mod / 2
      } else {
        mod = (mod - 1) / 2;
      }

      if (mod > 0) {
        mod = "+" + mod;
      }

      return mod;

    }
  }

}
