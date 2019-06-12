import { Personaje } from './personaje';

export let PERSONAJES: Personaje[] = [
    {
        idPersonaje: 1,
        nombrePersonaje: "Marcos Tilleta",
        experiencia: 0,
        alineamiento: 'Caótico neutral',
        idRaza: 1,
        idSubraza: 11,
        idJugador: 2,
        idClase: 1,
        idTrasfondo: 1,
        personalidad: '',
        ideales: '',
        vinculos: '',
        defectos: ''
    },
    {
        idPersonaje: 2,
        nombrePersonaje: "Luis Lote",
        experiencia: 55000,
        alineamiento: 'Caótico malvado',
        idRaza: 9,
        idSubraza: null,
        idJugador: 2,
        idClase: 2,
        idTrasfondo: 2,
        personalidad: '',
        ideales: '',
        vinculos: '',
        defectos: ''
    },
    {
        idPersonaje: 3,
        nombrePersonaje: "Mr. Perfecto",
        experiencia: 355000,
        alineamiento: 'Legal bueno',
        idRaza: 4,
        idSubraza: null,
        idJugador: 3,
        idClase: 11,
        idTrasfondo: 2,
        personalidad: 'Mi personalidad es trementamente perfecta',
        ideales: 'Mis ideales también son perfectos',
        vinculos: 'Mis vínculos son, para sopresa de muchos, perfectos',
        defectos: 'No tengo ninguno, por supuesto, soy perfecto'
    }
]