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
  mostrarArray = false;
  mostrarPuntos = false;
  mostrarRandom = false;

  totalPuntos= 27;

  random1 = 0;
  random2 = 0;
  random3 = 0;
  random4 = 0;
  random5 = 0;
  random6 = 0;

  caracteristicas: Caracteristica[];

  puntosArray: any[] = [
    {
      "array": 15,
      "pointBuy": 8,
      "random": this.aleatorio()
    },
    {
      "array": 14,
      "pointBuy": 8,
      "random": this.aleatorio()
    },
    {
      "array": 13,
      "pointBuy": 8,
      "random": this.aleatorio()
    },
    {
      "array": 12,
      "pointBuy": 8,
      "random": this.aleatorio()
    },
    {
      "array": 10,
      "pointBuy": 8,
      "random": this.aleatorio()
    },
    {
      "array": 8,
      "pointBuy": 8,
      "random": this.aleatorio()
    }
  ]
/* 
  puntosRandom: any[] = [
    {
      "random": this.aleatorio()
    },
    {
      "random": this.aleatorio()
    },
    {
      "random": this.aleatorio()
    },
    {
      "random": this.aleatorio()
    },
    {
      "random": this.aleatorio()
    },
    {
      "random": this.aleatorio()
    }
  ] */

  constructor(private dndService: DndService) { }

  ngOnInit() {
    this.getCaracteristicas();
  }

  getCaracteristicas(){
    this.dndService.getCaracteristicas()
     .subscribe(caracteristicas => this.caracteristicas = caracteristicas);
  }

  seleccionArray(){
    console.log("seleccionArray");
    this.mostrarArray = true;
    this.mostrarPuntos = false;
    this.mostrarRandom = false;
  }

  seleccionPuntos(){
    console.log("seleccionPuntos");
    this.mostrarArray = false;
    this.mostrarPuntos = true;
    this.mostrarRandom = false;
  }

  seleccionRandom(){
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

  aleatorio(){
    this.random1 = this.randomizado(8, 18);
    this.random2 = this.randomizado(8, 18);
    this.random3 = this.randomizado(8, 18);
    this.random4 = this.randomizado(8, 18);
    this.random5 = this.randomizado(8, 18);
    this.random6 = this.randomizado(8, 18);
  }

  randomizado(max: number, min:number){
    let numeroRandom = Math.floor(Math.random() * (max - min +1)) + min;
    return numeroRandom;
  }

  sumar(j: number){
    if(this.puntosArray[j].pointBuy == 8 ){
      this.puntosArray[j].pointBuy++;
    }else if(this.puntosArray[j].pointBuy == 15 ){
      
    }else if(this.puntosArray[j].pointBuy <= 15 || this.puntosArray[j].pointBuy >= 8 ){
      this.puntosArray[j].pointBuy++;

      if(this.puntosArray[j].pointBuy > 12){
        this.totalPuntos = this.totalPuntos-2;
      }else{
        this.totalPuntos--;
      }
    }

    /* if(this.puntosArray[j].pointBuy >= 15 || this.puntosArray[j].pointBuy <= 8 ){

    }else if(this.puntosArray[j].pointBuy > 12){
      this.totalPuntos = this.totalPuntos-2;
    }else{
      this.totalPuntos--;
    } */
  }

  restar(j: number){
    if(this.puntosArray[j].pointBuy == 8 ){
      
    }else if(this.puntosArray[j].pointBuy == 15 ){
      this.puntosArray[j].pointBuy--;

    }else if(this.puntosArray[j].pointBuy <= 15 || this.puntosArray[j].pointBuy >= 8 ){
      this.puntosArray[j].pointBuy--;

      if(this.puntosArray[j].pointBuy >= 12){
        this.totalPuntos = this.totalPuntos+2;
      }else{
        this.totalPuntos++;
      }

    }
    
    /* if(this.puntosArray[j].pointBuy >= 15 || this.puntosArray[j].pointBuy <= 8 ){

    }else if(this.puntosArray[j].pointBuy >= 12){
      this.totalPuntos = this.totalPuntos+2;
    }else{
      this.totalPuntos++;
    } */
  }

}
