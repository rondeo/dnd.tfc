import { Component, OnInit, Input } from '@angular/core';

import { DndService } from '../../services/dnd-service';
import { CaracteristicasPersonaje } from '../../objects/caracteristicasPersonaje';
import { Personaje } from '../../objects/personaje';
import { Raza } from '../../objects/raza';
import { Clase } from '../../objects/clase';
import { SubRaza } from '../../objects/subRaza';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  personaje: Personaje;

  raza: Raza;

  clase: Clase;

  subRaza: SubRaza;

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
  nivel = 0;
  percepcionPasiva: string = '';
  claseArmadura = '';
  iniciativa = '';
  velocidad = '';
  hitDice = '';
  hitDiceRestantes = '';
  vidaMaxima = '';
  vidaRestante = '';
  claseElegida: number;
  razaElegida: number;
  personalidad = '';
  ideales = '';
  vinculos = '';
  defectos = '';

  constructor(
    private dndService: DndService
  ) { }

  ngOnInit() {
    //this.resetStats();
    this.calcularCompetencia()
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
          // this.caracteristicasPersonaje[i].
          this.arrayStat[j].valor = this.caracteristicasPersonaje[i].puntuacionCaracteristica;
          this.calcularMod(j);
        }
      }
    }

    if (id != null && id != undefined && id != 0) {
      this.getPersonaje(id);


      this.getRaza(this.personaje.idRaza);
      this.getClase(this.personaje.idClase);

      if (this.personaje.personalidad !== undefined) {
        this.personalidad = (this.personaje.personalidad).toString();
      }

      if (this.personaje.ideales !== undefined) {
        this.ideales = (this.personaje.ideales).toString();
      }

      if (this.personaje.vinculos !== undefined) {
        this.vinculos = (this.personaje.vinculos).toString();
      }

      if (this.personaje.defectos !== undefined) {
        this.defectos = (this.personaje.defectos).toString();
      }




      this.velocidad = (this.raza.velocidad).toString();
      // this.hitDice = (this.nivel).toString() + 'd' + (this.clase.hitDice).toString();
      this.hitDice = 'd' + (this.clase.hitDice).toString();
      if (this.clase !== null || this.clase !== undefined) {
        this.hitDiceRestantes = (this.nivel).toString();
        this.calcularVida();
      }

    }

  }

  getPersonaje(id: number) {
    this.dndService.getPersonaje(id)
      .subscribe(personaje => this.personaje = personaje);
  }

  getRaza(id: number) {
    this.dndService.getRaza(id)
      .subscribe(raza => this.raza = raza);
  }

  getSubRaza(id: number) {
    this.dndService.getSubRaza(id)
      .subscribe(subRaza => this.subRaza = subRaza);
  }

  getClase(id: number) {
    this.dndService.getClase(id)
      .subscribe(clase => this.clase = clase);
  }

  calcularCompetencia() {
    this.experiencia = this.dndService.getExperiencia();
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
    // this.hitDiceRestantes = (this.nivel).toString();
    this.revisarCompetencia();


    this.calcularVidayDados();



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
    this.calculoClaseArmadura();
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

    if (this.arraySalv[i].valor !== '') {
      // console.log("Aqui entra " + this.arraySalv[i].valor);
      cuenta = parseInt(this.arraySalv[i].valor);

      if (bool) {
        this.arraySalv[i].valor = (cuenta + this.competencia);
      } else {
        this.arraySalv[i].valor = (cuenta - this.competencia);
      }

      if (this.arraySalv[i].valor > 0) {
        this.arraySalv[i].valor = '+' + this.arraySalv[i].valor;
      }
    } else {
      // console.log("entra Aqui ");
      return this.arraySalv[i].valor = '';
    }
    // console.log(this.arraySalv[i]);

  }

  competenteHab(bool: boolean, i: number) {
    let cuenta

    if (this.arrayHab[i].valor !== '') {
      cuenta = parseInt(this.arrayHab[i].valor);

      if (bool) {
        this.arrayHab[i].valor = (cuenta + this.competencia);
      } else {
        this.arrayHab[i].valor = (cuenta - this.competencia);
      }

      if (this.arrayHab[i].valor > 0) {
        this.arrayHab[i].valor = '+' + this.arrayHab[i].valor;
      }
    } else {
      return this.arrayHab[i].valor = '';
    }
    // console.log(this.arrayHab[i]);

  }

  revisarCompetencia() {
    let i = 0;
    this.arraySalv.forEach(element => {
      if (element.comp && element.valor !== '') {
        element.valor = parseInt(this.arrayMod[i]);
        element.valor = element.valor + this.competencia;
      }
      if (element.valor > 0 && element.comp && element.valor !== '') {
        element.valor = '+' + element.valor;
      }
      i++;
    });

    this.arrayHab.forEach(element => {
      if (element.comp) {
        for (let index = 0; index < this.arrayMod.length; index++) {
          if (element.stat == index && element.valor !== '') {
            element.valor = parseInt(this.arrayMod[index]);
            element.valor = element.valor + this.competencia;
          }
        }
      }
      if (element.valor > 0 && element.comp && element.valor !== '') {
        element.valor = '+' + element.valor;
      }
      i++;
    });
  }

  calculoPercepcionPasiva() {
    // if (this.arrayHab[11].valor !== '' || this.arrayHab[11].valor == NaN) {
    if (this.arrayHab[11].valor !== '') {
      let valor = 10 + parseInt(this.arrayHab[11].valor);
      if (this.arrayHab[11].valor === undefined) {
        // console.log("Entra en el if, se devuelve el valor "+valor);
        return this.percepcionPasiva = '';
      }
      // console.log("No entra en el if, se devuelve el valor "+this.arrayHab[11].valor);
      return this.percepcionPasiva = '' + valor;
    } else {
      // console.log("No entra siquiera, se devuelve el valor "+this.arrayHab[11].valor);
      return this.percepcionPasiva = '';
    }

  }

  calculoClaseArmadura() {
    if (this.arrayMod[1] !== '') {
      let valor = 10 + parseInt(this.arrayMod[1]);
      if (this.arrayMod[1] === undefined) {
        this.iniciativa = '';
        return this.claseArmadura = '';
      }
      this.iniciativa = this.arrayMod[1];
      return this.claseArmadura = '' + valor;
    } else {
      this.iniciativa = '';
      return this.claseArmadura = '';
    }
  }

  calcularVida() {
    if (this.clase !== null && this.clase !== undefined && this.arrayMod[2] !== '' && this.arrayMod[2] !== null && this.arrayMod[2] !== undefined) {
      for (let i = 1; i <= this.nivel; i++) {
        if (i === 1) {
          this.vidaMaxima = (this.clase.hitDice + parseInt(this.arrayMod[2])).toString();
          this.vidaRestante = this.vidaMaxima;
        } else {
          let aumento = (this.clase.hitDice / 2) + 1;
          this.vidaMaxima = (parseInt(this.vidaMaxima) + (aumento + parseInt(this.arrayMod[2]))).toString();
          this.vidaRestante = this.vidaMaxima;
        }
      }
    } else {
      this.vidaMaxima = '';
      this.vidaRestante = this.vidaMaxima;
    }
  }

  calcularVidayDados() {

    this.razaElegida = null;
    this.raza = null;
    this.subRaza = null;
    this.claseElegida = null;
    this.clase = null;

    this.razaElegida = this.dndService.getRazaElegida();

    this.claseElegida = this.dndService.getClaseElegida();

    if (this.razaElegida != null && this.razaElegida != undefined && this.razaElegida != 0) {
      this.getSubRaza(this.razaElegida);
      if (this.subRaza != null) {
        this.razaElegida = this.subRaza.idRaza;
        this.getRaza(this.razaElegida);
        this.velocidad = (this.raza.velocidad).toString();
      } else {
        this.getRaza(this.razaElegida);
        this.velocidad = (this.raza.velocidad).toString();
      }

    }

    // console.log("aqui llega " +this.clase);
    if (this.claseElegida !== null && this.claseElegida !== undefined && this.claseElegida != 0) {
      this.getClase(this.claseElegida);
      this.hitDice = 'd' + (this.clase.hitDice).toString();
      this.hitDiceRestantes = (this.nivel).toString();
      this.calcularVida();
    } else {

    }
  }

}
