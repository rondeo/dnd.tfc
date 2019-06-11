import { Component, OnInit } from '@angular/core';
import { Caracteristica } from 'src/app/objects/caracteristica';
import { DndService } from 'src/app/services/dnd-service';

@Component({
  selector: 'app-crear-stats',
  templateUrl: './crear-stats.component.html',
  styleUrls: ['./crear-stats.component.scss']
})
export class CrearStatsComponent implements OnInit {

  mostrarArray = true;
  mostrarPuntos = false;
  mostrarRandom = false;

  statsCreacion: any[] = [
    { "id": 1, "valor": 15 },
    { "id": 2, "valor": 14 },
    { "id": 3, "valor": 13 },
    { "id": 4, "valor": 12 },
    { "id": 5, "valor": 10 },
    { "id": 6, "valor": 8 }
  ];

  totalPuntos = 27;

  // randomArray: any[] = [
  //   {
  //     "random": 0
  //   },
  //   {
  //     "random": 0
  //   },
  //   {
  //     "random": 0
  //   },
  //   {
  //     "random": 0
  //   },
  //   {
  //     "random": 0
  //   },
  //   {
  //     "random": 0
  //   }
  // ]

  arrayFixed: any[] = [
    {
      "id": 0,
      "array": 15
    },
    {
      "id": 1,
      "array": 14
    },
    {
      "id": 2,
      "array": 13
    },
    {
      "id": 3,
      "array": 12
    },
    {
      "id": 4,
      "array": 10
    },
    {
      "id": 5,
      "array": 8
    }
  ]


  caracteristicas: Caracteristica[];

  puntosArray: any[] = [
    {
      "id": 0,
      "array": 15,
      "pointBuy": 8,
      "random": 0
    },
    {
      "id": 1,
      "array": 14,
      "pointBuy": 8,
      "random": 0
    },
    {
      "id": 2,
      "array": 13,
      "pointBuy": 8,
      "random": 0
    },
    {
      "id": 3,
      "array": 12,
      "pointBuy": 8,
      "random": 0
    },
    {
      "id": 4,
      "array": 10,
      "pointBuy": 8,
      "random": 0
    },
    {
      "id": 5,
      "array": 8,
      "pointBuy": 8,
      "random": 0
    }
  ]


  constructor(private dndService: DndService) { }

  ngOnInit() {
    this.getCaracteristicas();
    this.setearStatsArray();
  }

  getCaracteristicas() {
    this.dndService.getCaracteristicas()
      .subscribe(caracteristicas => this.caracteristicas = caracteristicas);
  }

  seleccionArray() {
    console.log("seleccionArray");
    if (this.mostrarArray == false) {
      //this.resetStatsCreacion();
      this.resetArray();
      this.setearStatsArray();
    }
    this.mostrarArray = true;
    this.mostrarPuntos = false;
    this.mostrarRandom = false;
  }

  seleccionPuntos() {
    console.log("seleccionPuntos");
    if (this.mostrarPuntos == false) {
      this.resetPuntos();
      this.setearStatsPuntos();
    }
    this.mostrarArray = false;
    this.mostrarPuntos = true;
    this.mostrarRandom = false;
  }

  seleccionRandom() {
    console.log("seleccionRandom");
    this.aleatorio();
    this.setearStatsRandom();
    this.mostrarArray = false;
    this.mostrarPuntos = false;
    this.mostrarRandom = true;
  }

  aleatorio() {
    // this.puntosArray[0].random = this.randomizado(8, 18);
    // this.puntosArray[1].random = this.randomizado(8, 18);
    // this.puntosArray[2].random = this.randomizado(8, 18);
    // this.puntosArray[3].random = this.randomizado(8, 18);
    // this.puntosArray[4].random = this.randomizado(8, 18);
    // this.puntosArray[5].random = this.randomizado(8, 18);

    for (let i = 0; i < this.puntosArray.length; i++) {
      this.puntosArray[i].random = this.randomizado(8, 18);;
      
    }
    this.setearStatsRandom();
  }

  randomizado(max: number, min: number) {
    let numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroRandom;
  }

  sumar(i: number) {

    if (this.totalPuntos > 0) {

      if (this.puntosArray[i].pointBuy == 8) {
        this.puntosArray[i].pointBuy++;
        this.totalPuntos--;
        this.setearStatsPuntos();
      } else if (this.puntosArray[i].pointBuy == 15) {

      } else if (this.puntosArray[i].pointBuy <= 15 || this.puntosArray[i].pointBuy >= 8) {

        if (this.puntosArray[i].pointBuy >= 13) {
          this.totalPuntos = this.totalPuntos - 2;
        } else {
          this.totalPuntos--;
        }

        this.puntosArray[i].pointBuy++;
        this.setearStatsPuntos();

      }
    }
  }

  restar(i: number) {
    if (this.puntosArray[i].pointBuy == 8) {

    } else if (this.puntosArray[i].pointBuy == 15) {
      this.puntosArray[i].pointBuy--;
      this.totalPuntos = this.totalPuntos + 2;
      this.setearStatsPuntos();
    } else if (this.puntosArray[i].pointBuy <= 15 || this.puntosArray[i].pointBuy >= 8) {


      if (this.puntosArray[i].pointBuy > 13) {
        this.totalPuntos = this.totalPuntos + 2;
      } else {
        this.totalPuntos++;
      }

      this.puntosArray[i].pointBuy--;
      this.setearStatsPuntos();

    }

  }

  arriba(i: number) {

    if (i === 0) {

    } else {
      this.puntosArray[i].array = this.arrayFixed[i - 1].array;
      this.puntosArray[i - 1].array = this.arrayFixed[i].array;
      this.arrayFixed[i].array = this.puntosArray[i].array;
      this.arrayFixed[i - 1].array = this.puntosArray[i - 1].array;
      this.setearStatsArray();
    }

    //this.setearStatsArray();
  }

  abajo(i: number) {
    if (i === 5) {

    } else {
      this.puntosArray[i].array = this.arrayFixed[i + 1].array;
      this.puntosArray[i + 1].array = this.arrayFixed[i].array;
      this.arrayFixed[i].array = this.puntosArray[i].array;
      this.arrayFixed[i + 1].array = this.puntosArray[i + 1].array;
      this.setearStatsArray();
    }

    //this.setearStatsArray();
  }

  resetPuntos() {
    this.totalPuntos = 27;
    this.puntosArray.forEach(reseteado => {
      reseteado.pointBuy = 8;
    })
  }

  resetArray() {
    this.puntosArray[0].array = 15;
    this.puntosArray[1].array = 14;
    this.puntosArray[2].array = 13;
    this.puntosArray[3].array = 12;
    this.puntosArray[4].array = 10;
    this.puntosArray[5].array = 8;

    this.arrayFixed[0].array = 15;
    this.arrayFixed[1].array = 14;
    this.arrayFixed[2].array = 13;
    this.arrayFixed[3].array = 12;
    this.arrayFixed[4].array = 10;
    this.arrayFixed[5].array = 8;

    // for (let i = 0; i < this.statsCreacion.length; i++) {
    //   this.statsCreacion[i].valor = this.puntosArray[i].array;
    //   console.log(this.statsCreacion[i].valor);
    // }

  }

  resetStatsCreacion(){
    //this.statsCreacion[0].valor = 0;
    for (let i = 0; i < this.statsCreacion.length; i++) {
      this.statsCreacion[i].valor = 0;
      
    }
  }

  setearStatsArray(){
    for (let i = 0; i < this.statsCreacion.length; i++) {
      this.statsCreacion[i].valor = this.puntosArray[i].array;
      //console.log(this.statsCreacion[i].valor);
    }
  }

  setearStatsPuntos(){
    for (let i = 0; i < this.statsCreacion.length; i++) {
      this.statsCreacion[i].valor = this.puntosArray[i].pointBuy;
      // console.log(this.statsCreacion[i].valor);
    }
  }

  setearStatsRandom(){
    for (let i = 0; i < this.statsCreacion.length; i++) {
      this.statsCreacion[i].valor = this.puntosArray[i].random;
      // console.log(this.statsCreacion[i].valor);
    }
  }

  asignarStatsCreacion(){
    this.dndService.setStatsCreacion(this.statsCreacion);
    this.dndService.setMensajeCreacion();
    // console.log(this.dndService.getStatsCreacion());
    // console.log("Stats asignados");
  }

}
