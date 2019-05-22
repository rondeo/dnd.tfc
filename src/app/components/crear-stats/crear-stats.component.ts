import { Component, OnInit } from '@angular/core';
import { Caracteristica } from 'src/app/objects/caracteristica';
import { DndService } from 'src/app/services/dnd-service';

@Component({
  selector: 'app-crear-stats',
  templateUrl: './crear-stats.component.html',
  styleUrls: ['./crear-stats.component.scss']
})
export class CrearStatsComponent implements OnInit {

  mostrar = false;
  mostrarArray = true;
  mostrarPuntos = false;
  mostrarRandom = false;

  totalPuntos = 27;

  randomArray: any[] = [
    {
      "random": 0
    },
    {
      "random": 0
    },
    {
      "random": 0
    },
    {
      "random": 0
    },
    {
      "random": 0
    },
    {
      "random": 0
    }
  ]

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
      "pointBuy": 8
    },
    {
      "id": 1,
      "array": 14,
      "pointBuy": 8
    },
    {
      "id": 2,
      "array": 13,
      "pointBuy": 8
    },
    {
      "id": 3,
      "array": 12,
      "pointBuy": 8
    },
    {
      "id": 4,
      "array": 10,
      "pointBuy": 8
    },
    {
      "id": 5,
      "array": 8,
      "pointBuy": 8
    }
  ]

  constructor(private dndService: DndService) { }

  ngOnInit() {
    this.getCaracteristicas();
  }

  getCaracteristicas() {
    this.dndService.getCaracteristicas()
      .subscribe(caracteristicas => this.caracteristicas = caracteristicas);
  }

  seleccionArray() {
    console.log("seleccionArray");
    if (this.mostrarArray == false) {
      this.resetArray();
    }
    this.mostrarArray = true;
    this.mostrarPuntos = false;
    this.mostrarRandom = false;
  }

  seleccionPuntos() {
    console.log("seleccionPuntos");
    if (this.mostrarPuntos == false) {
      this.resetPuntos();
    }
    this.mostrarArray = false;
    this.mostrarPuntos = true;
    this.mostrarRandom = false;
  }

  seleccionRandom() {
    console.log("seleccionRandom");
    this.aleatorio();
    /* this.puntosRandom.forEach(element => {
      element = this.aleatorio();
      console.log(element);
    }); */
    this.mostrarArray = false;
    this.mostrarPuntos = false;
    this.mostrarRandom = true;
  }

  aleatorio() {
    this.randomArray[0].random = this.randomizado(8, 18);
    this.randomArray[1].random = this.randomizado(8, 18);
    this.randomArray[2].random = this.randomizado(8, 18);
    this.randomArray[3].random = this.randomizado(8, 18);
    this.randomArray[4].random = this.randomizado(8, 18);
    this.randomArray[5].random = this.randomizado(8, 18);
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
      } else if (this.puntosArray[i].pointBuy == 15) {

      } else if (this.puntosArray[i].pointBuy <= 15 || this.puntosArray[i].pointBuy >= 8) {

        if (this.puntosArray[i].pointBuy >= 13) {
          this.totalPuntos = this.totalPuntos - 2;
        } else {
          this.totalPuntos--;
        }

        this.puntosArray[i].pointBuy++;

      }
    }
    /* if(this.puntosArray[i].pointBuy >= 15 || this.puntosArray[i].pointBuy <= 8 ){

    }else if(this.puntosArray[i].pointBuy > 12){
      this.totalPuntos = this.totalPuntos-2;
    }else{
      this.totalPuntos--;
    } */
  }

  restar(i: number) {
    if (this.puntosArray[i].pointBuy == 8) {

    } else if (this.puntosArray[i].pointBuy == 15) {
      this.puntosArray[i].pointBuy--;
      this.totalPuntos = this.totalPuntos + 2;
    } else if (this.puntosArray[i].pointBuy <= 15 || this.puntosArray[i].pointBuy >= 8) {


      if (this.puntosArray[i].pointBuy > 13) {
        this.totalPuntos = this.totalPuntos + 2;
      } else {
        this.totalPuntos++;
      }

      this.puntosArray[i].pointBuy--;

    }

    /* if(this.puntosArray[i].pointBuy >= 15 || this.puntosArray[i].pointBuy <= 8 ){

    }else if(this.puntosArray[i].pointBuy >= 12){
      this.totalPuntos = this.totalPuntos+2;
    }else{
      this.totalPuntos++;
    } */
  }

  arriba(i: number) {

  }

  abajo(i: number, j: number) {
    //let j=i;
    switch (i) {
      case 0:
        this.puntosArray[i].array = this.arrayFixed[i+1].array;
        this.puntosArray[j].array = this.arrayFixed[i].array;
        break;
      
      case 1:
        this.puntosArray[i].array = this.arrayFixed[i+1].array;
        this.puntosArray[i+1].array = this.arrayFixed[i].array;
        break;

      case 2:

        break;

      case 3:

        break;

      case 4:

        break;

      case 5:

        break;

      default:
        break;
    }
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
  }

}
