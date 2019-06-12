import { Component, OnInit } from '@angular/core';
import { Jugador } from 'src/app/objects/jugador';
import { DndService } from 'src/app/services/dnd-service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  jugador: Jugador;

  jugadorSesion: number;

  constructor(
    private dndService: DndService
  ) { }

  ngOnInit() {

    // this.getJugadorSesion();
    this.getJugador();

  }

  // getJugadorSesion() {
  //   this.jugadorSesion = this.dndService.getJugadorSesion();
  // }

  getJugador() {
    this.dndService.getJugador(this.dndService.getJugadorSesion())
      .subscribe(jugador => this.jugador = jugador);

    
  }

}
