import { Component, OnInit } from '@angular/core';
import { DndService } from 'src/app/services/dnd-service';
import { Personaje } from 'src/app/objects/personaje';

@Component({
  selector: 'app-creacion',
  templateUrl: './creacion.component.html',
  styleUrls: ['./creacion.component.scss']
})
export class CreacionComponent implements OnInit {

  personajeCreado = false;

  id = null;

  nombre = null;

  alineamiento = null;

  experiencia =null;

  raza = null;

  subraza = null;

  jugador = null;

  clase = null;

  trasfondo = null;

  stats: any[] = [
    { id: 1, valor: null },
    { id: 2, valor: null },
    { id: 3, valor: null },
    { id: 4, valor: null },
    { id: 5, valor: null },
    { id: 6, valor: null }
  ];

  constructor(private dndService: DndService) { }

  ngOnInit() {
    this.personajeCreado = false;
  }

  confirmarCreacion(){
    //console.log("Esto aun no está preparado, lol")

    let array: Personaje;

    this.id = this.dndService.getIdCreacion();
    this.nombre = this.dndService.getNombreCreacion();
    this.alineamiento = this.dndService.getAlineamientoCreacion();
    this.experiencia = this.dndService.getExperienciaCreacion();
    this.raza = this.dndService.getRazaCreacion();
    this.subraza = this.dndService.getSubRazaCreacion();
    this.jugador = this.dndService.getJugadorCreacion();
    this.clase=this.dndService.getClaseCreacion();
    this.trasfondo = this.dndService.getTrasfondoCreacion();
    this.stats = this.dndService.getStatsCreacion();

    if(!this.id||!this.nombre||!this.alineamiento||!this.raza||!this.clase||!this.trasfondo||!this.stats[0].valor){
      return ;
    }

    //console.log(this.nombre);

    array = {
      idPersonaje: this.id, nombrePersonaje: this.nombre, experiencia: this.experiencia,
      alineamiento: this.alineamiento, idRaza: this.raza, idSubraza: this.subraza,
      idJugador: 1, idClase: this.clase, idTrasfondo: this.trasfondo
    }

    this.dndService.crearPersonaje(array);

    

    //this.dndService.asignarStatsPersonaje

    for (let i = 0; i < this.stats.length; i++) {
      this.dndService.asignarStatsPersonaje(this.stats[i].id, this.id, this.stats[i].valor);
    }

    

    this.id = null;
    this.nombre = null;
    this.alineamiento = null;
    this.experiencia = null;
    this.raza = null;
    this.subraza = null;
    this.jugador = null;
    this.clase=null;
    this.trasfondo = null;
    this.stats = [
      { id: 1, valor: null },
      { id: 2, valor: null },
      { id: 3, valor: null },
      { id: 4, valor: null },
      { id: 5, valor: null },
      { id: 6, valor: null }
    ];

    this.dndService.setIdCreacion(this.id);
    this.dndService.setNombreCreacion(this.nombre);
    this.dndService.setAlineamientoCreacion(this.alineamiento);
    this.dndService.setExpecienciaCreacion(this.experiencia);
    this.dndService.setRazaCreacion(this.raza);
    this.dndService.setSubRazaCreacion(this.subraza);
    this.dndService.setJugadorCreacion(this.jugador);
    this.dndService.setClaseCreacion(this.clase);
    this.dndService.setTrasfondoCreacion(this.trasfondo);
    this.dndService.setStatsCreacion(this.stats);

    //console.log("Todo done");
    this.personajeCreado = true;
  }

}
