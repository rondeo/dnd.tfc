import { Component, OnInit, Input } from '@angular/core';

import { DndService } from 'src/app/services/dnd-service';
import { CaracteristicasPersonaje } from 'src/app/objects/caracteristicasPersonaje';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  caracteristicasPersonaje: CaracteristicasPersonaje[];

  arrayStat: any[] = [
    { id: 1, valor: '' },
    { id: 2, valor: '' },
    { id: 3, valor: '' },
    { id: 4, valor: '' },
    { id: 5, valor: '' },
    { id: 6, valor: '' }
  ]

  arrayMod: any[] = [
    '', '', '', '', '', ''
  ]

  arraySalv: any[] = [
    { valor: '', comp: false },
    { valor: '', comp: false },
    { valor: '', comp: false },
    { valor: '', comp: false },
    { valor: '', comp: false },
    { valor: '', comp: false }
  ]

  arrayHab: any[] = [
    { valor: '', comp: false, stat: 1 },
    { valor: '', comp: false, stat: 0 },
    { valor: '', comp: false, stat: 3 },
    { valor: '', comp: false, stat: 5 },
    { valor: '', comp: false, stat: 3 },
    { valor: '', comp: false, stat: 5 },
    { valor: '', comp: false, stat: 5 },
    { valor: '', comp: false, stat: 3 },
    { valor: '', comp: false, stat: 1 },
    { valor: '', comp: false, stat: 4 },
    { valor: '', comp: false, stat: 3 },
    { valor: '', comp: false, stat: 4 },
    { valor: '', comp: false, stat: 4 },
    { valor: '', comp: false, stat: 5 },
    { valor: '', comp: false, stat: 3 },
    { valor: '', comp: false, stat: 1 },
    { valor: '', comp: false, stat: 4 },
    { valor: '', comp: false, stat: 4 }
  ]

  experiencia = '';
  competencia = 0;
  percepcionPasiva:String = '';

  constructor(
    private dndService: DndService
  ) { }

  ngOnInit() {
    //this.resetStats();
    this.getCaracteristicasPersonaje();
  }

  // resetStats(){
  //   this.caracteristicasPersonaje = null;
  //   for (let i = 0; i < this.arrayStat.length; i++) {
  //     this.arrayStat[i].valor = '';
  //     console.log(this.arrayStat[i].valor);
  //   }
  //   console.log("Stats reseteados");
  // }

  getCaracteristicasPersonaje() {
    // this.caracteristicasPersonaje = null;

    const id = this.dndService.getPersonajeElegido();
    this.dndService.getCaracteristicasPersonajes()
      .subscribe(caracteristicasPersonaje => this.caracteristicasPersonaje = caracteristicasPersonaje);
    //console.log(id);
    for (let i = 0; i < this.caracteristicasPersonaje.length; i++) {
      for (let j = 0; j < this.arrayStat.length; j++) {
        if (this.caracteristicasPersonaje[i].idPersonaje == id && this.arrayStat[j].id == this.caracteristicasPersonaje[i].idCaracteristica) {
          //console.log(this.caracteristicasPersonaje[i].idPersonaje);
          this.arrayStat[j].valor = this.caracteristicasPersonaje[i].puntuacionCaracteristica;
          this.calcularMod(j);
        }
      }
    }

  }

  calcularCompetencia() {
    this.experiencia = this.dndService.getExperiencia();
    let exp;
    exp = parseInt(this.experiencia);

    if (exp >= 0 && exp < 6500) {
      this.competencia = 2;
    } else if (exp >= 6500 && exp < 48000) {
      this.competencia = 3;
    } else if (exp >= 48000 && exp < 120000) {
      this.competencia = 4;
    } else if (exp >= 120000 && exp < 225000) {
      this.competencia = 5;
    } else if (exp >= 225000 && exp <= 355000) {
      this.competencia = 6;
    }

    this.revisarCompetencia();

    return '+' + this.competencia;

  }

  calcularMod(i: number) {
    this.arrayMod[i] = this.calculo(this.arrayStat[i].valor);
    this.arraySalv[i].valor = this.arrayMod[i];
    this.arrayHab.forEach(element => {
      if (element.stat === i) {
        element.valor = this.arrayMod[i];
      }
    });
    this.calculoPercepcionPasiva();
    return this.calculo(this.arrayStat[i].valor);
  }

  calculo(numero: string) {

    let mod;

    mod = parseInt(numero);


    if (mod > 20) {
      mod = 20;
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
        mod = '+' + mod;
      }

      return mod;

    }
  }


  competenteSalv(bool: boolean, i: number) {
    let cuenta

    cuenta = parseInt(this.arraySalv[i].valor);

    if (bool) {
      this.arraySalv[i].valor = (cuenta + this.competencia);
    } else {
      this.arraySalv[i].valor = (cuenta - this.competencia);
    }

    if (this.arraySalv[i].valor > 0) {
      this.arraySalv[i].valor = '+' + this.arraySalv[i].valor;
    }

    console.log(this.arraySalv[i]);

  }

  competenteHab(bool: boolean, i: number) {
    let cuenta

    cuenta = parseInt(this.arrayHab[i].valor);

    if (bool) {
      this.arrayHab[i].valor = (cuenta + this.competencia);
    } else {
      this.arrayHab[i].valor = (cuenta - this.competencia);
    }

    if (this.arrayHab[i].valor > 0) {
      this.arrayHab[i].valor = '+' + this.arrayHab[i].valor;
    }

    console.log(this.arrayHab[i]);

  }

  revisarCompetencia() {
    let i = 0;
    this.arraySalv.forEach(element => {
      if (element.comp) {
        element.valor = parseInt(this.arrayMod[i]);
        element.valor = element.valor + this.competencia;
      }
      if (element.valor > 0 && element.comp) {
        element.valor = '+' + element.valor;
      }
      i++;
    });

    this.arrayHab.forEach(element => {
      if (element.comp) {
        for (let index = 0; index < this.arrayMod.length; index++) {
          if (element.stat == index) {
            element.valor = parseInt(this.arrayMod[index]);
            element.valor = element.valor + this.competencia;
          }
        }
      }
      if (element.valor > 0 && element.comp) {
        element.valor = '+' + element.valor;
      }
      i++;
    });
  }

  calculoPercepcionPasiva() {
    // if (this.arrayHab[11].valor !== '' || this.arrayHab[11].valor == NaN) {
    if (this.arrayHab[11].valor !== '') {
      let valor =10 + parseInt(this.arrayHab[11].valor);
      if(this.arrayHab[11].valor === undefined){
        // console.log("Entra en el if, se devuelve el valor "+valor);
        return this.percepcionPasiva = '';
      }
      // console.log("No entra en el if, se devuelve el valor "+this.arrayHab[11].valor);
      return this.percepcionPasiva = '' + valor;
    }else {
      // console.log("No entra siquiera, se devuelve el valor "+this.arrayHab[11].valor);
      return this.percepcionPasiva = '';
    }

  }

}
