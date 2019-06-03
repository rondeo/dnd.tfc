import { Component, OnInit } from '@angular/core';
import { DndService } from 'src/app/services/dnd-service';
import { Personaje } from 'src/app/objects/personaje';

@Component({
  selector: 'app-creacion',
  templateUrl: './creacion.component.html',
  styleUrls: ['./creacion.component.scss']
})
export class CreacionComponent implements OnInit {



  id: number;

  nombre: String;

  alineamiento: String;

  experiencia =0;

  raza: number;

  subraza = null;

  jugador: number;

  clase: number;

  trasfondo: number;

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
  }

  confirmarCreacion(){
    console.log("Esto aun no está preparado, lol")

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

    if(!this.id||!this.nombre||!this.alineamiento||!this.experiencia||!this.raza||!this.clase||!this.trasfondo||!this.stats){
      return console.log("Te falta alguna cosa");
    }
    array = {
      idPersonaje: this.id, nombrePersonaje: this.nombre, experiencia: this.experiencia,
      alineamiento: this.alineamiento, idJugador: 1, idRaza: this.raza, idSubraza: this.subraza,
      idClase: this.clase, idTrasfondo: this.trasfondo
    }
    console.log(array);
    
    this.dndService.crearPersonaje(array);

    for (let i = 0; i < this.stats.length; i++) {
      this.dndService.introducirStats(this.stats[i].id, this.id, this.stats[i].valor);
      console.log(this.stats[i] + "introducido");
    }


  }

}
