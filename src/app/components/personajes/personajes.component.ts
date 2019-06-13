import { Component, OnInit } from '@angular/core';
import { DndService } from '../../services/dnd-service';
import { Personaje } from '../../objects/personaje';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {

  personajes: Personaje[];

  jugadorSesion: number;

  mostrar = false;

  constructor(private dndService: DndService) { }

  ngOnInit() {
    this.getPersonajes();
  }

  getPersonajes() {
    this.jugadorSesion = this.dndService.getJugadorSesion();

    this.dndService.getPersonajesJugador(this.jugadorSesion)
      .subscribe(personajes => this.personajes = personajes);

    if (this.personajes == null || this.personajes == undefined) {
      this.mostrar = true;
    } else {
      this.mostrar = false;
    }
  }


}
