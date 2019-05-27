import { Component, OnInit, Input } from '@angular/core';
import { clearModulesForTest } from '@angular/core/src/linker/ng_module_factory_loader';
import { DndService } from 'src/app/services/dnd-service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  arrayStat: any[] = [
    '', '', '', '', '', ''
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
  percepcionPasiva = '';

  constructor(private dndService: DndService) { }

  ngOnInit() {

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
    this.arrayMod[i] = this.calculo(this.arrayStat[i]);
    this.arraySalv[i].valor = this.arrayMod[i];
    this.arrayHab.forEach(element => {
      if (element.stat === i) {
        element.valor = this.arrayMod[i];
      }
    });
    this.calculoPercepcionPasiva();
    return this.calculo(this.arrayStat[i]);
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
    this.percepcionPasiva = '' + (10 + parseInt(this.arrayHab[11].valor));
  }

}
