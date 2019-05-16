import { Component, OnInit } from '@angular/core';
import { Raza } from 'src/app/objects/raza';
import { DndService } from 'src/app/services/dnd-service';
import { RasgoRaza } from 'src/app/objects/rasgoRaza';

@Component({
  selector: 'app-crear-raza',
  templateUrl: './crear-raza.component.html',
  styleUrls: ['./crear-raza.component.scss']
})
export class CrearRazaComponent implements OnInit {

  mostrar = false;

  razas: Raza[];

  rasgoRaza: RasgoRaza[];

  constructor(private dndService: DndService) { }

  ngOnInit() {
    this.getRazas();
  }

  getRazas() {
    this.dndService.getRazas()
     .subscribe(razas => this.razas = razas);
  }

  getRasgosRaza(id: Number){
    this.dndService.getRasgosRaza(id)
      .subscribe(rasgo => this.rasgoRaza = rasgo);
    this.mostrar = true;
  }

}
