import { Component, OnInit } from '@angular/core';
import { DndService } from 'src/app/services/dnd-service';

@Component({
  selector: 'app-creacion',
  templateUrl: './creacion.component.html',
  styleUrls: ['./creacion.component.scss']
})
export class CreacionComponent implements OnInit {

  id = 0;

  nombre = '';

  alineamiento = '';

  experiencia =0;

  raza = 0;

  subraza = null;

  jugador = 0;

  clase = 0;

  trasfondo = 0;

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

    
  }

}
