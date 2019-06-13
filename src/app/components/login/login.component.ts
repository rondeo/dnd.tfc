import { Component, OnInit } from '@angular/core';
import { Jugador } from '../../objects/jugador';
import { DndService } from '../../services/dnd-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  jugadores: Jugador[];
  
  mensajeLogin = '';

  jugadorSesion = 0;

  constructor(
    private dndService: DndService,
    private router: Router
    ) { }

  ngOnInit() {
    this.getJugadores();
  }

  iniciarSesion(user: string, passwd: string) {
    for (let i = 0; i < this.jugadores.length; i++) {
      if(user == this.jugadores[i].nombreJugador){
        if(passwd == this.jugadores[i].contraseña){
          this.jugadorSesion = this.jugadores[i].idJugador;
          this.dndService.setJugadorSesion(this.jugadorSesion);
          return this.router.navigateByUrl('/usuario');
        }else{
          return this.mensajeLogin = 'Contraseña incorrecta'
        }
      } else if(user == undefined || user == ''){
        this.mensajeLogin = 'Introduce un usuario'
      }else {
        this.mensajeLogin = 'Usuario incorrecto'
      }
      
    }
  }

  getJugadores() {
    this.dndService.getJugadores()
      .subscribe(jugadores => this.jugadores = jugadores);

  }
}
