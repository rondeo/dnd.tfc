import { Component, OnInit } from '@angular/core';
import { PERSONAJES } from 'src/app/objects/mock-personaje';
import { Personaje } from 'src/app/objects/personaje';

@Component({
  selector: 'app-crear-info',
  templateUrl: './crear-info.component.html',
  styleUrls: ['./crear-info.component.scss']
})
export class CrearInfoComponent implements OnInit {

  personajes = PERSONAJES;

  constructor() { }

  ngOnInit() {
  }

  addCharacter(nombre: string, alineamiento: string, nivel: string) {
    let id = this.genID(this.personajes);
    nombre = nombre.trim();
    alineamiento = alineamiento.trim();
    nivel = nivel.trim();

    if (!nombre) {
      return alert('Tu personaje debe tener un nombre');
    } else if (!alineamiento) {
      return alert('Tu personaje debe tener un alineamiento');
    } else if (!nivel) {
      return alert('Tu personaje debe tener un nivel');
    }

    if(!id || !nombre || !alineamiento || !nivel){
      return;
    }
    console.log('Id: '+id+', Nombre: ' + nombre+ ', alineamiento: ' + alineamiento + 'nivel');
  }

  genID(personajes: Personaje[]): number{
    return personajes.length > 0 ? Math.max(...personajes.map(personaje => personaje.idPersonaje)) + 1: 1;
  }

}
