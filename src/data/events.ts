export interface UpcomingEvent {
  id: string;
  title: string;
  date: string;
  place?: string;
  description: string;
}

export interface PastEvent {
  id: string;
  title: string;
  date: string;
  place?: string;
  description: string;
  images: string[];
}

export const upcomingEvents: UpcomingEvent[] = [
  {
    id: 'up1',
    title: 'Día del Ingeniero  2025',
    date: '15 de Mayo, 2025',
    place: 'Auditorio Principal',
    description: 'Celebración institucional del Día del Ingeniero con conferencias y stands.',
  },
  {
    id: 'up2',
    title: 'INNOVATEC 2026',
    date: '2026',
    place: 'TecNM Campus Orizaba',
    description: 'Exposición de proyectos de innovación tecnológica.',
  },
];

export const pastEvents: PastEvent[] = [
  {
    id: 'past1',
    title: 'Hackathon TecNM 2025',
    date: 'Noviembre 2025',
    place: 'TecNM Centro Computo',
    description: 'Participación en hackathon con proyecto sobre cultura hidrica.',
    images: [
      './public/img/hackatec.jpg',
    ],
  },
  {
    id: 'past2',
    title: 'ExpoCiencias Etapa Regional 2025',
    date: 'Septiembre 2025',
    place: 'COLEGIO AMERICANO DE XALAPA',
    description: 'Stand y demostraciones de proyectos de las tres ingenierías.',
    images: [
      './public/img/ExpoXalapa/eq-exp.jpg',
      './public/img/ExpoXalapa/acreditacion-expx.jpg',
      './public/img/ExpoXalapa/eq-exp2.jpg',
      './public/img/ExpoXalapa/eq-exp3.JPG',
      './public/img/ExpoXalapa/expxalapa.jpg',
      './public/img/ExpoXalapa/expoxalapa2.jpg',
      './public/img/ExpoXalapa/expoxalapa3.JPG',
    ],
  },
  {
    id: 'past3',
    title: 'ExpoCiencias Etapa Nacional 2025',
    date: 'Diciembre 2025',
    place: 'Tampico, Tamaulipas',
    description: 'Asistencia a conferencia sobre transformación digital.',
    images: [
      './public/img/ExpoTampico/reconocimientotampico.jpg',
      './public/img/ExpoTampico/expotampico.JPG',
      './public/img/ExpoTampico/expotampico2.jpg',
      './public/img/ExpoTampico/expotampico3.jpg',
      './public/img/ExpoTampico/expotampico4.jpg',
      './public/img/ExpoTampico/expotampico5.jpg',
      './public/img/ExpoTampico/expotampico6.jpg',
      './public/img/ExpoTampico/expotampico7.jpg',
      './public/img/ExpoTampico/expotampico8.jpg',
      './public/img/ExpoTampico/expotampico9.jpg',

    ],
  },
  {
    id: 'past4',
    title: 'Publicación en revista de CITCA del CENIDET',
    date: '2025',
    place: 'CITCA del CENIDET',
    description: 'Participación en publicación en revista de CITCA del CENIDET.',
    images: [

    ],
  },
  {
    id: 'past4',
    title: 'Encuentro Nacional de Robotica 2026',
    date: 'Febrero 2026',
    place: 'Tlalpan, Ciudad de México',
    description: 'Participación en encuentro nacional de robotica con proyecto "ORI-BOT".',
    images: [
      './public/img/EncuentroNacionalRobotica/robotica.jpg',
      './public/img/EncuentroNacionalRobotica/robotica2.JPG',
      './public/img/EncuentroNacionalRobotica/robotica3.jpg',
      './public/img/EncuentroNacionalRobotica/robotica4.jpg',

    ],
  },
];
