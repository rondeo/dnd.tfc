import { Component, OnInit } from '@angular/core';
import { Clase } from 'src/app/objects/clase';
import { RasgoClase } from 'src/app/objects/rasgoClase';
import { DndService } from 'src/app/services/dnd-service';

@Component({
  selector: 'app-crear-clase',
  templateUrl: './crear-clase.component.html',
  styleUrls: ['./crear-clase.component.scss']
})
export class CrearClaseComponent implements OnInit {

  claseCreacion = null;

  mostrar = false;

  clases: Clase[];

  rasgoClase: RasgoClase[];

  constructor(private dndService: DndService) { }

  ngOnInit() {
    this.getClases();
  }
  getClases() {
    this.dndService.getClases()
      .subscribe(clases => this.clases = clases);
  }

  getRasgosClase(id: Number){
    this.dndService.getRasgosClase(id)
      .subscribe(rasgo => this.rasgoClase = rasgo);
    this.mostrar = true;
    this.claseCreacion = id;
    //console.log("Clase elegida " + this.claseCreacion)
  }

  asignarClase(idClase){
    //console.log("Clase elegida " + idClase)
    this.dndService.setClaseCreacion(idClase);
    
    //console.log("Clase elegida " + this.dndService.getClaseCreacion());
  }

}
