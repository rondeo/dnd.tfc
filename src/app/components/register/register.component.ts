import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Jugador } from 'src/app/objects/jugador';
import { JUGADORES } from 'src/app/objects/mock-jugador';
import { DndService } from 'src/app/services/dnd-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  jugadores = JUGADORES;

  mostrar = false;

  constructor(
    private dndService: DndService,
    private location: Location
    ) { }

  ngOnInit() {
  }

  add(nombre: string, contra: string){
    let array: Jugador;
    let id = this.genID(this.jugadores);
    nombre = nombre.trim();
    contra = contra.trim();

    if(!nombre){
      return alert("Error, debe introducirse un nombre");
    } else if(!contra){
      return alert("Error, debe introducirse una contraseña")
    }

    if(!nombre || !contra || !id){
      return ;
    }
    array = { idJugador: id, nombreJugador: nombre, contraseña: contra};

    this.dndService.crearJugador(array);

    this.mostrar = true;

    // for (let i = 0; i < this.jugadores.length; i++) {
    //   console.log(this.jugadores);
      
    // }

  }

  goBack(): void {
    this.location.back();
  }

  genID(jugadores: Jugador[]): number {
    return jugadores.length > 0 ? Math.max(...jugadores.map(jugador => jugador.idJugador)) + 1 : 1;
  }

}
