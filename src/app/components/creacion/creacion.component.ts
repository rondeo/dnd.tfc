import { Component, OnInit } from '@angular/core';
import { DndService } from '../../services/dnd-service';
import { Personaje } from '../../objects/personaje';

@Component({
  selector: 'app-creacion',
  templateUrl: './creacion.component.html',
  styleUrls: ['./creacion.component.scss']
})
export class CreacionComponent implements OnInit {

  personajeCreado = false;

  mensaje = '';

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

  personalidad = null;

  ideales = null;

  vinculos = null;

  defectos = null;

  constructor(private dndService: DndService) { }

  ngOnInit() {
    this.personajeCreado = false;
    this.dndService.setMensajeCreacion();
    this.mensaje = this.dndService.getMensajeCreacion();
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
    this.jugador = this.dndService.getJugadorSesion();
    this.clase=this.dndService.getClaseCreacion();
    this.trasfondo = this.dndService.getTrasfondoCreacion();
    this.stats = this.dndService.getStatsCreacion();
    this.personalidad = this.dndService.getPersonalidadCreacion();
    this.ideales = this.dndService.getIdealesCreacion();
    this.vinculos = this.dndService.getVinculosCreacion();
    this.defectos = this.dndService.getDefectosCreacion();

    // if(!this.id){
    //   alert("No has cre");
    //   return ;
    // } else 
    if (!this.nombre){
      alert("Falta por introducir el nombre");
      return ;
    } else if (!this.alineamiento){
      alert("Falta por introducir el alineamiento");
      return ;
    } else if (!this.raza){
      alert("Falta por introducir la raza");
      return ;
    } else if (!this.clase){
      alert("Falta por introducir la clase");
      return ;
    } else if (!this.trasfondo){
      alert("Falta por introducir el trasfondo");
      return ;
    } else if (!this.stats[0].valor){
      alert("Faltan por introducir los stats");
      return ;
    }

    //console.log(this.nombre);

    array = {
      idPersonaje: this.id, nombrePersonaje: this.nombre, experiencia: this.experiencia,
      alineamiento: this.alineamiento, idRaza: this.raza, idSubraza: this.subraza,
      idJugador: this.jugador, idClase: this.clase, idTrasfondo: this.trasfondo, personalidad: this.personalidad,
      ideales: this.ideales, vinculos: this.vinculos, defectos: this.defectos
    }

    this.dndService.crearPersonaje(array);

    

    //this.dndService.asignarStatsPersonaje

    for (let i = 0; i < this.stats.length; i++) {
      this.dndService.asignarStatsPersonaje(this.stats[i].id, this.id, this.stats[i].valor);
    }

    

    // this.id = null;
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
    this.personalidad = '';
    this.ideales = '';
    this.vinculos = '';
    this.defectos = '';

    // this.dndService.setIdCreacion(this.id);
    this.dndService.setNombreCreacion(this.nombre);
    this.dndService.setAlineamientoCreacion(this.alineamiento);
    this.dndService.setExpecienciaCreacion(this.experiencia);
    this.dndService.setRazaCreacion(this.raza);
    this.dndService.setSubRazaCreacion(this.subraza);
    this.dndService.setClaseCreacion(this.clase);
    this.dndService.setTrasfondoCreacion(this.trasfondo);
    this.dndService.setStatsCreacion(this.stats);
    this.dndService.setPersonalidadCreacion(this.personalidad);
    this.dndService.setIdealesCreacion(this.ideales);
    this.dndService.setVinculosCreacion(this.vinculos);
    this.dndService.setDefectosCreacion(this.defectos);

    //console.log("Todo done");
    this.personajeCreado = true;
  }

  verPersonaje(){
    this.personajeCreado=false;
    this.id = null;
    this.dndService.setIdCreacion(this.id);
  }

  getMensaje(){
    this.mensaje = this.dndService.getMensajeCreacion();
  }

}
