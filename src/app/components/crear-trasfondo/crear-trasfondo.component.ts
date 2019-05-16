import { Component, OnInit } from '@angular/core';
import { Trasfondo } from 'src/app/objects/trasfondo';
import { DndService } from 'src/app/services/dnd-service';

@Component({
  selector: 'app-crear-trasfondo',
  templateUrl: './crear-trasfondo.component.html',
  styleUrls: ['./crear-trasfondo.component.scss']
})
export class CrearTrasfondoComponent implements OnInit {

  mostrar = false;

  trasfondos: Trasfondo[];

  constructor(private dndService: DndService) { }

  ngOnInit() {
    this.getTrasfondos();
  }

  getTrasfondos() {
    this.dndService.getTrasfondos()
     .subscribe(trasfondos => this.trasfondos = trasfondos);
  }

  siguiente(){
    this.mostrar = true;
  }

}
