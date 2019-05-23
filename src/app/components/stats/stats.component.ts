import { Component, OnInit } from '@angular/core';

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

  fueMod = '';
  dexMod = '';
  conMod = '';
  intMod = '';
  sabMod = '';
  carMod = '';

  constructor() { }

  ngOnInit() {
    this.calcularFue(this.fue);
  }

  calcularFue(number: string) {
    let mod;

    if (!isNaN(parseInt(number))) {
      mod = parseInt(number) - 10;

      if (mod % 2 == 0) {
        mod = mod / 2
      } else {
        mod = (mod - 1) / 2;
      }

      if (mod >= 0){
        mod = "+" + mod;
      }

      this.fueMod = mod;

      console.log(this.fueMod);
      
    }



  }

  calcularDes(number: Number) {

  }

  calcularCon(number: Number) {

  }

  calcularInt(number: Number) {

  }

  calcularSab(number: Number) {

  }

  calcularCar(number: Number) {

  }

}
