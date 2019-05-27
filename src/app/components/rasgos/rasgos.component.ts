import { Component, OnInit } from '@angular/core';
import { RasgoRaza } from 'src/app/objects/rasgoRaza';
import { RasgoSubraza } from 'src/app/objects/rasgoSubraza';
import { DndService } from 'src/app/services/dnd-service';

@Component({
  selector: 'app-rasgos',
  templateUrl: './rasgos.component.html',
  styleUrls: ['./rasgos.component.scss']
})
export class RasgosComponent implements OnInit {

  rasgoRaza: RasgoRaza[];

  rasgoSubraza: RasgoSubraza[];

  razaElegida=0;

  constructor(private dndService: DndService) { }

  ngOnInit() {
    this.getRazaElegida();
  }

  getRazaElegida(){
    this.razaElegida = this.dndService.getRazaElegida();
    console.log(this.razaElegida);
  }

  
  getRasgosRaza(id: Number) {
    this.dndService.getRasgosRaza(id)
      .subscribe(rasgo => this.rasgoRaza = rasgo);
  }


  getRasgosSubraza(id: Number) {
    this.dndService.getRasgosSubraza(id)
      .subscribe(rasgo => this.rasgoSubraza = rasgo);
    
  }



}
