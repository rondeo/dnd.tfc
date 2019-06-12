import { Component, OnInit } from '@angular/core';
import { DndService } from 'src/app/services/dnd-service';
import { Personaje } from 'src/app/objects/personaje';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {

  personajes: Personaje[];

  jugadorSesion: number;

  constructor(private dndService: DndService) { }

  ngOnInit() {
    this.getPersonajes();
  }

  getPersonajes(){
    this.jugadorSesion = this.dndService.getJugadorSesion();

    this.dndService.getPersonajesJugador(this.jugadorSesion)
      .subscribe(personajes => this.personajes = personajes);
  }

}
