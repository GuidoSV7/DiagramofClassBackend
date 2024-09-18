import * as bcrypt from 'bcrypt';
interface SeedUnidadEducativa {
  nombre: string;
  coordenada_x: number;
  coordenada_y: number;
  direccion: string;
  historia: string;
  fotos: string[];
  idInfraestructura: number;
  idTipoColegio: number;
  idTurno: number;
}

interface SeedUser {
  email: string;
  name: string;
  password: string;
  roles: string[];
}

interface SeedEspecialidad {
  nombre: string;

}
interface SeedInfraestructura {
  nombre: string;
}

interface SeedTipoColegio {
  nombre: string;
}

interface SeedCategoria {
  nombre: string;
}

interface SeedTurno {
  nombre: string;
}

interface SeedGestione {
  numero: number;
  horario: string;
  director: string;
  juntaescolar: string;
  idUnidadEducativa:number
}

interface SeedApoyossociales {
  nombre: string;
  cantidad: number;
  nombreEntrega: string;
  fecha: Date;
  idUnidadEducativa: number;
}

interface SeedApoyosgubernamentales {
  cantidad: number;
  nombreEntrega: string;
  fecha: Date;
  idUnidadEducativa: number;
  idCategoria: number;
}

interface SeedDesayunos {
  nombre: string;
  cantidad: number;
  nombreEntrega: string;
  fecha: Date;
  idUnidadEducativa: number;
}

interface SeedMantenimientos {
  titulo: string;
  fecha: Date;
  encargado: string;
  empresa: string;
  idUnidadEducativa: number;
}

interface SeedData {
  users: SeedUser[];

  unidadeseducativas: SeedUnidadEducativa[];
  infraestructuras: SeedInfraestructura[];
  tipocolegios: SeedTipoColegio[];
  turnos: SeedTurno[];
  gestiones: SeedGestione[];
  apoyossociales: SeedApoyossociales[];
  apoyosgubernamentales: SeedApoyosgubernamentales[];
  desayunos: SeedDesayunos[];
  mantenimientos: SeedMantenimientos[];
  categorias: SeedCategoria[];
  especialidades: SeedEspecialidad[];
  
}

export const initialData: SeedData = {
  users: [
    {
      email: 'distritosiete@gmail.com',
      name: 'Distrito Siete Super User',
      password: bcrypt.hashSync('123456', 10),
      roles: ['user', 'super-user'],
    },

    {
      email: 'Admin@gmail.com',
      name: 'Distrito Siete Admin',
      password: bcrypt.hashSync('123456', 10),
      roles: ['admin'],
    },
    {
      email: 'test1@gmail.com',
      name: 'User 1',
      password: bcrypt.hashSync('123456', 10),
      roles: ['user'],
    },
    {
      email: 'test2@gmail.com',
      name: 'User 2',
      password: bcrypt.hashSync('123456', 10),
      roles: ['user'],
    },
  ],

  categorias: [
    {
      nombre: 'Camaras',
    },

    {
      nombre: 'Sillas',
    },

    {
      nombre: 'Mesas',
    },
  ],

  gestiones: [
    {
      numero: 467456,
      horario: '7:00 - 10:00',
      director: 'Lic. Daniel Sergio Covarrubias Camacho',
      juntaescolar:
        'https://media.telemundo51.com/2023/07/New-Broward-Public-Schools-superintendent-addresses-teacherunis-salaries.jpg?quality=85&strip=all&resize=850%2C478',
      idUnidadEducativa: 3
      },
    {
      numero: 567456,
      horario: '7:00 - 10:00',
      director: 'Lic. Daniel Sergio Covarrubias Camacho',
      juntaescolar:
        'https://media.telemundo51.com/2023/07/New-Broward-Public-Schools-superintendent-addresses-teachers-salaries.jpg?quality=85&strip=all&resize=850%2C478',
        idUnidadEducativa: 1,
      },
    {
      numero: 678456,
      horario: '17:00 - 10:00',
      director: 'Lic. Daniel Sergio Covarrubias Camacho',
      juntaescolar:
        'https://media.telemundo51.com/2023/07/New-Broward-Public-Schools-superintendent-addresses-teachers-salaries.jpg?quality=85&strip=all&resize=850%2C478',
        idUnidadEducativa: 2
      },
    {
      numero: 123456,
      horario: '7:00 - 10:00',
      director: 'Lic. Daniel Sergio Covarrubias Camacho',
      juntaescolar:
        'https://media.telemundo51.com/2023/07/New-Broward-Public-Schools-superintendent-addresses-teachers-salaries.jpg?quality=85&strip=all&resize=850%2C478',
        idUnidadEducativa: 4
      },
    {
      numero: 78956,
      horario: '7:00 - 10:00',
      director: 'Lic. Daniel Sergio Covarrubias Camacho',
      juntaescolar:
        'https://media.telemundo51.com/2023/07/New-Broward-Public-Schools-superintendent-addresses-teachers-salaries.jpg?quality=85&strip=all&resize=850%2C478',
        idUnidadEducativa: 5
      },
  ],

  turnos: [
    {
      nombre: 'Mañana',
    },
    {
      nombre: 'Tarde',
    },
    {
      nombre: 'Noche',
    },
  ],

  tipocolegios: [
    {
      nombre: 'Convenio',
    },
    {
      nombre: 'Publico',
    },
    {
      nombre: 'Privado',
    },
  ],

  infraestructuras: [
    {
      nombre: 'Modulo',
    },
    {
      nombre: 'Escuela',
    },
  ],
  unidadeseducativas: [
    {
      nombre: 'Unidad Educativa 12 de Abril',
      coordenada_x: -63.1351584,
      coordenada_y: -17.8008285,
      direccion:
        'Av. 3 pasos al Frente y Av. Che Guevara, zona Villa 1ro de Mayo',
      historia:
        'La Unidad Educativa 12 de Abril, fue fundado el 3 de Febrero el 1990, en aquel entonces ubicado en la Av. 3 de pasos al Frente, entre las Av. Che Guevara y Av. 16 de Julio, iniciando actividades en el ciclo intermedio, contando en sus inicios con 7 docente y 1 secretaria a la cabedez de la Directora Prof. Cristina Centellas. Actulamente la Unidad Educativa 12 de Abril funciona con el nivel Secundario, en el turno tarde, situado en el área urbana de la Ciduad de Santa Cruz de la Sierra, zona Villa 1ro de Mayo, entre las avenidas Tres pasos al frente, Av. Che Guevara y 5to anillo. La parte administrativa 2021-2023 se encuentra al cabeza del Lic. Daniel Sergio Covarrubias Camacho como director de la U.E., además de una secretaria, 2 auxiliares administrativos y una portera, todos al servicio de la comunidad educativa. 26 docentes altamente calificados, que brindan una excelente formación académica a todos nuestros estudiantes. Cuenta con 619 estudiantes distribuidos en sus 18 cursos de nivel Secundario de 1ro. a 6to., la gestión 2023 brindará a la ciudad y al país 80 flamantes bachilleres y futuros profesionales que tomarán las riendas de nuestras empresas, del departamento y del  país. La junta escolar a la cabeza de la Sra. Juana Graciela Vaca de Quiroga, quien junto a los P.P.F.F están pendiente de las necesidades del establecimiento.',
      fotos: [
        'https://www.12deabril.edu.bo/wp-content/uploads/2021/04/IMG_20210401_095356.jpg',
        'https://www.12deabril.edu.bo/wp-content/uploads/2021/04/IMG_20210401_095356.jpg',
        'https://www.12deabril.edu.bo/wp-content/uploads/2021/04/IMG_20210401_095356.jpg',
      ],
      idInfraestructura: 1,
      idTipoColegio: 1,
      idTurno: 2
    },
    {
      nombre: 'Unidad Educativa Nacional Ayacucho',
      coordenada_x: -63.137352,
      coordenada_y: -17.796113,
      direccion: 'No hay información',
      historia:
        'El 13 de Enero de 1991 se obtiene la Resolución Administartica cambiando el nombre de julio leigue hurtado a Nacional Ayacucho tránsmite que se realizó por el Prof. Santiago Fernández. En fecha 1ro de febrero de 2010 la unidad educativa cambia de edificio y turno trasladándose al modulo educativo 18 de marzo, turno mañana nivel secundaria, con el mismo nombre y sie 81980505 y servicio 75013. En la actualidad contamos con 18 cursos y un total de 718 estudiantes, 26 docentes y 4 administrativos que conforman un personal docente selecto en las diferentes especialidades del nivel secundario; a cargo del director Lic. Javier Jaime Apala Condori. Se destaca la participacion de los estudiantes en actividades como las Olimpiadas Cientificas, juegos plurinacionales, concursos departamentales y la conformacion de la banda de música, concursos de ajedrez. ',
      fotos: [
        'https://www.12deabril.edu.bo/wp-content/uploads/2021/04/IMG_20210401_095356.jpg',
        'https://www.12deabril.edu.bo/wp-content/uploads/2021/04/IMG_20210401_095356.jpg',
        'https://www.12deabril.edu.bo/wp-content/uploads/2021/04/IMG_20210401_095356.jpg',
      ],
      idInfraestructura: 1,
      idTipoColegio: 1,
      idTurno: 3
    },
    {
      nombre: 'Unidad Educativa 20 de Junio - Noche',
      coordenada_x: -63.1547659,
      coordenada_y: -17.800949,
      direccion: 'No hay información',
      historia:
        'Unidad Educativa 20 de Junio - Noche, reseña historica 1995 - 2023 Fue fundada en 1995 bajo la administración del Prof. José Luis Azurduy, con la resolución administrativa N° 166299 de 26 de Noviembre de 1999. La Unidad Educativa 20 de Junio - Noche es de nivel secundario educación comunitaria productiva. La unidad educativa es de turno noche. Director de la Unidad Educativa: Lic. Marcelino Zambrana Condori. Administrativo: Cuenta con 2 administrativos y 1 de servicio. Docentes: Trabajan 16 profesores. Estudiantes: La unidad educativa cobija 388 estudiantes',
      fotos: [
        'https://www.12deabril.edu.bo/wp-content/uploads/2021/04/IMG_20210401_095356.jpg',
        'https://www.12deabril.edu.bo/wp-content/uploads/2021/04/IMG_20210401_095356.jpg',
        'https://www.12deabril.edu.bo/wp-content/uploads/2021/04/IMG_20210401_095356.jpg',
      ],
      idInfraestructura: 1,
      idTipoColegio: 1,
      idTurno: 3
    },
    {
      nombre: 'Unidad Educativa Pampa de la Cruz - B',
      coordenada_x: -63.130746,
      coordenada_y: -17.7940737,
      direccion: 'No hay información',
      historia:
        'La Unidad Educativa Pampa de la Cruz - B nació como escuela Rural ahora urbana, el 06 de diciembre del año 1963, teniendo hoy en día 60 años de funcionamiento, está ubicada en la villa 1ro de Mayo Barrio Pampa de la Cruz, sobre la Av.Cumavi, entre el 6to Anillo y a una cuadra antes de la Av. 16 de Julio. e encuentra dirigiendo está Institución Educativa la Lic. Rocío del Carmen Durán de los Ríos la unidad educativa cuenta en la actualidad con 354 estudiantes, 15 docentes y 3 administrativos',
      fotos: [
        'https://www.12deabril.edu.bo/wp-content/uploads/2021/04/IMG_20210401_095356.jpg',
        'https://www.12deabril.edu.bo/wp-content/uploads/2021/04/IMG_20210401_095356.jpg',
        'https://www.12deabril.edu.bo/wp-content/uploads/2021/04/IMG_20210401_095356.jpg',
      ],
      idInfraestructura: 1,
      idTipoColegio: 1,
      idTurno: 3,
    },
    {
      nombre: 'Unidad educativa 20 de junio mañana',
      coordenada_x: -63.1372286,
      coordenada_y: -17.8011059,
      direccion: 'No hay información',
      historia:
        'Fue fundada el 20 de junio de 1979 en los predios del centro educativo para dar inicio a la hora de construcción gestionado por los padres y madres de la familia a la cabeza de la señora petrona montaño. El 17 de abril de 1980 se consigue la ayuda del club de Leones para la construcción de tres aulas en dirección y baños al mismo tiempo se consiguen tres items para el funcionamiento del medio educativa con un curso de kinder y el ciclo básico completo, Los primeros docentes fueron los siguientes Mary tapia ,Carmen Lazo Y Laudencio Benavides los mismos que trabajan mañana y tarde para cubrir la falta de ítem y así se comienza a trabajar en casa de familia hasta esperar que termine la construcción Actualmente la directora del unidad educativa 20 de junio es la Lic. Vicky Betsabé Marín marca en el turno de la mañana junto a 13 docentes altamente calificados también cuenta con 1 personal administrativo y de 1 servicio En este momento cuenta con 450 estudiantes en los niveles de inicial en familia comunitaria y primaria comunitaria vocacional',
      fotos: [
        'https://www.12deabril.edu.bo/wp-content/uploads/2021/04/IMG_20210401_095356.jpg',
        'https://www.12deabril.edu.bo/wp-content/uploads/2021/04/IMG_20210401_095356.jpg',
        'https://www.12deabril.edu.bo/wp-content/uploads/2021/04/IMG_20210401_095356.jpg',
      ],
      idInfraestructura: 1,
      idTipoColegio: 1,
      idTurno: 3
    },
  ],

  apoyossociales: [
    {
      nombre: 'Apoyo 1',
      cantidad: 50,
      nombreEntrega: 'Ronald Camino',
      fecha: new Date('2022-07-22'),
      idUnidadEducativa: 1,
    },
    {
      nombre: 'Apoyo 2',
      cantidad: 50,
      nombreEntrega: 'Ronald Camino',
      fecha: new Date('2022-07-23'),
      idUnidadEducativa: 1,
    },
    {
      nombre: 'Apoyo 3',
      cantidad: 502,
      nombreEntrega: 'Ronald Camino',
      fecha: new Date('2022-07-22'),
      idUnidadEducativa: 2,
    },

    {
      nombre: 'Apoyo 4',
      cantidad: 50,
      nombreEntrega: 'Ronald Camino',
      fecha: new Date('2022-07-22'),
      idUnidadEducativa: 3,
    },

    {
      nombre: 'Apoyo 5',
      cantidad: 50,
      nombreEntrega: 'Ronald Camino',
      fecha: new Date('2022-07-22'),
      idUnidadEducativa: 4,
    },

    {
      nombre: 'Apoyo 6',
      cantidad: 50,
      nombreEntrega: 'Ronald Camino',
      fecha: new Date('2022-07-22'),
      idUnidadEducativa: 5,
    },
  ],

  apoyosgubernamentales: [
    {
      cantidad: 50,
      nombreEntrega: 'Ronald Camino',
      fecha: new Date('2022-07-22'),
      idUnidadEducativa: 1,
      idCategoria: 1,
    },
    {
      cantidad: 40,
      nombreEntrega: 'Ronald Camino',
      fecha: new Date('2022-07-23'),
      idUnidadEducativa: 1,
      idCategoria: 2,
    },
    {
      cantidad: 502,
      nombreEntrega: 'Ronald Camino',
      fecha: new Date('2022-07-22'),
      idUnidadEducativa: 2,
      idCategoria: 3,
    },

    {
      cantidad: 50,
      nombreEntrega: 'Ronald Camino',
      fecha: new Date('2022-07-26'),
      idUnidadEducativa: 3,
      idCategoria: 1,
    },

    {
      cantidad: 50,
      nombreEntrega: 'Ronald Camino',
      fecha: new Date('2022-07-23'),
      idUnidadEducativa: 4,
      idCategoria: 2,
    },

    {
      cantidad: 50,
      nombreEntrega: 'Ronald Camino',
      fecha: new Date('2022-07-22'),
      idUnidadEducativa: 5,
      idCategoria: 3,
    },
  ],

  desayunos: [
    {
      nombre: 'Muffins de Chocolate con Leche',
      cantidad: 50,
      nombreEntrega: 'Ronald Camino',
      fecha: new Date('2022-07-22'),
      idUnidadEducativa: 1,
    },
    {
      nombre: 'Sandwich de Pollo con Mayonesa',
      cantidad: 50,
      nombreEntrega: 'Ronald Camino',
      fecha: new Date('2022-07-23'),
      idUnidadEducativa: 1,
    },
    {
      nombre: 'Yogurt Griego con Almendras',
      cantidad: 502,
      nombreEntrega: 'Ronald Camino',
      fecha: new Date('2022-07-22'),
      idUnidadEducativa: 2,
    },

    {
      nombre: 'Arandanos con Pastel',
      cantidad: 50,
      nombreEntrega: 'Ronald Camino',
      fecha: new Date('2022-07-22'),
      idUnidadEducativa: 3,
    },

    {
      nombre: 'Muffins de Zanahoria',
      cantidad: 50,
      nombreEntrega: 'Ronald Camino',
      fecha: new Date('2022-07-22'),
      idUnidadEducativa: 4,
    },

    {
      nombre: 'lalalalalalal',
      cantidad: 50,
      nombreEntrega: 'Ronald Camino',
      fecha: new Date('2022-07-22'),
      idUnidadEducativa: 5,
    },
  ],

  mantenimientos: [
    {
      titulo: 'Limpieza de aulas',
      fecha: new Date('2022-07-22'),
      encargado: 'Alejandro Pumari',
      empresa: 'Los Pumas SL',
      idUnidadEducativa: 1,
    },

    {
      titulo: 'Desinfectar UE',
      fecha: new Date('2022-07-22'),
      encargado: 'Alejandro Pumari',
      empresa: 'Los Pumas SL',
      idUnidadEducativa: 1,
    },

    {
      titulo: 'Cuidado del Parque',
      fecha: new Date('2022-07-22'),
      encargado: 'Alejandro Pumari',
      empresa: 'Los Pumas SL',
      idUnidadEducativa: 2,
    },

    {
      titulo: 'Limpieza de baños',
      fecha: new Date('2022-07-22'),
      encargado: 'Alejandro Pumari',
      empresa: 'Los Pumas SL',
      idUnidadEducativa: 3,
    },
  ],

  especialidades:[
    {
      nombre: 'Oftalmologia'
    },
    {
      nombre: 'Neurologia'
      
    },

  ]
};
//