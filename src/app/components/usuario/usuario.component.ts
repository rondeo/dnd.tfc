import { Component, OnInit } from '@angular/core';
import { Jugador } from 'src/app/objects/jugador';
import { DndService } from 'src/app/services/dnd-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  jugador: Jugador;

  jugadorSesion: number;

  constructor(
    private dndService: DndService,
    private router: Router
  ) { }

  ngOnInit() {

    // this.getJugadorSesion();
    this.getJugador();

  }

  // getJugadorSesion() {
  //   this.jugadorSesion = this.dndService.getJugadorSesion();
  // }

  getJugador() {
    this.jugadorSesion = this.dndService.getJugadorSesion();
    if (this.jugadorSesion === 0) {
      return this.router.navigateByUrl('');
    } else {
      this.dndService.getJugador(this.jugadorSesion)
        .subscribe(jugador => this.jugador = jugador);
    }
  }

}
