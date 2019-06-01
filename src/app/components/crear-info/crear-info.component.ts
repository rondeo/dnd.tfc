import { Component, OnInit } from '@angular/core';
import { PERSONAJES } from 'src/app/objects/mock-personaje';
import { Personaje } from 'src/app/objects/personaje';
import { DndService } from 'src/app/services/dnd-service';

@Component({
  selector: 'app-crear-info',
  templateUrl: './crear-info.component.html',
  styleUrls: ['./crear-info.component.scss']
})
export class CrearInfoComponent implements OnInit {

  personajes = PERSONAJES;

  constructor(private dndService: DndService) { }

  ngOnInit() {
  }

  addCharacter(nombre: string, alineamiento: string, nivel: string) {
    let id = this.genID(this.personajes);
    //let expActual;
    nombre = nombre.trim();
    alineamiento = alineamiento.trim();
    nivel = nivel.trim();
    //expActual = parseInt(nivel);

    if (!nombre) {
      return alert('Tu personaje debe tener un nombre');
    } else if (!alineamiento) {
      return alert('Tu personaje debe tener un alineamiento');
    } else if (!nivel) {
      return alert('Tu personaje debe tener un nivel');
    }

    if (!id || !nombre || !alineamiento || !nivel) {
      return;
    }
    //console.log('Id: ' + id + ', Nombre: ' + nombre + ', alineamiento: ' + alineamiento + ', nivel: ' + nivel);

    this.dndService.setIdCreacion(id);
    this.dndService.setNombreCreacion(nombre);
    this.dndService.setAlineamientoCreacion(alineamiento);
    this.dndService.setExpecienciaCreacion(this.convertNivelExperiencia(parseInt(nivel)));



    //console.log('Implementado Id: ' + this.dndService.getIdCreacion() + ', Nombre: ' + this.dndService.getNombreCreacion() + ', alineamiento: ' + this.dndService.getAlineamientoCreacion() + ', experiencia: ' + this.dndService.getExperienciaCreacion());

  }

  genID(personajes: Personaje[]): number {
    return personajes.length > 0 ? Math.max(...personajes.map(personaje => personaje.idPersonaje)) + 1 : 1;
  }

  convertNivelExperiencia(nivel) {
    switch (nivel) {
      case 1:
        return 0;
        break;
      case 2:
        return 300;
        break;
      case 3:
        return 900;
        break;
      case 4:
        return 2700;
        break;
      case 5:
        return 6500;
        break;
      case 6:
        return 14000;
        break;
      case 7:
        return 23000;
        break;
      case 8:
        return 34000;
        break;
      case 9:
        return 48000;
        break;
      case 10:
        return 64000;
        break;
      case 11:
        return 85000;
        break;
      case 12:
        return 100000;
        break;
      case 13:
        return 120000;
        break;
      case 14:
        return 140000;
        break;
      case 15:
        return 165000;
        break;
      case 16:
        return 195000;
        break;
      case 17:
        return 225000;
        break;
      case 18:
        return 265000;
        break;
      case 19:
        return 305000;
        break;
      case 20:
        return 355000;
        break;

      default:
        break;
    }
  }

}
