import { Component, OnInit } from '@angular/core';
import { PERSONAJES } from 'src/app/objects/mock-personaje';
import { Personaje } from 'src/app/objects/personaje';
import { DndService } from 'src/app/services/dnd-service';
import { Alineamiento } from 'src/app/objects/alineamiento';

@Component({
  selector: 'app-crear-info',
  templateUrl: './crear-info.component.html',
  styleUrls: ['./crear-info.component.scss']
})
export class CrearInfoComponent implements OnInit {

  nombrePersonaje = '';

  mostrar = false;

  personajes = PERSONAJES;

  alineamientos: Alineamiento[];

  constructor(private dndService: DndService) { }

  ngOnInit() {
    this.getAlineamientos();
  }

  getAlineamientos() {
    this.dndService.getAlineamientos()
      .subscribe(alineamientos => this.alineamientos = alineamientos);
  }

  addCharacter(nombre: string, alineamiento: string, nivel: string, personalidad: string, ideales: string, vinculos: string, defectos: string) {
    let id = this.genID(this.personajes);
    //let expActual;
    nombre = nombre.trim();
    alineamiento = alineamiento.trim();
    nivel = nivel.trim();
    personalidad = personalidad.trim();
    ideales = ideales.trim();
    vinculos = vinculos.trim();
    defectos = defectos.trim();
    
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
    // console.log(personalidad);

    this.dndService.setIdCreacion(id);
    this.dndService.setNombreCreacion(nombre);
    this.dndService.setAlineamientoCreacion(alineamiento);
    this.dndService.setExpecienciaCreacion(this.convertNivelExperiencia(parseInt(nivel)));
    this.dndService.setPersonalidadCreacion(personalidad);
    this.dndService.setIdealesCreacion(ideales);
    this.dndService.setVinculosCreacion(vinculos);
    this.dndService.setDefectosCreacion(defectos);

    //console.log('Implementado Id: ' + this.dndService.getIdCreacion() + ', Nombre: ' + this.dndService.getNombreCreacion() + ', alineamiento: ' + this.dndService.getAlineamientoCreacion() + ', experiencia: ' + this.dndService.getExperienciaCreacion());
    console.log("Info creada");
    this.dndService.setMensajeCreacion();

    this.mostrar = false;
  }

  genID(personajes: Personaje[]): number {
    return personajes.length > 0 ? Math.max(...personajes.map(personaje => personaje.idPersonaje)) + 1 : 1;
  }

  convertNivelExperiencia(nivel) {
    switch (nivel) {
      case 1:
        return 0;
      
      case 2:
        return 300;
      
      case 3:
        return 900;
        
      case 4:
        return 2700;
        
      case 5:
        return 6500;
        
      case 6:
        return 14000;
        
      case 7:
        return 23000;
        
      case 8:
        return 34000;
        
      case 9:
        return 48000;
        
      case 10:
        return 64000;
        
      case 11:
        return 85000;
        
      case 12:
        return 100000;
        
      case 13:
        return 120000;
        
      case 14:
        return 140000;
        
      case 15:
        return 165000;
        
      case 16:
        return 195000;
        
      case 17:
        return 225000;
        
      case 18:
        return 265000;
        
      case 19:
        return 305000;
        
      case 20:
        return 355000;

      default:
        break;
    }
  }

  mostrarConfirmar(){
    this.mostrar = true;
  }

}
