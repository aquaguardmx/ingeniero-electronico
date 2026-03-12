export interface TeamMember {
  id: string;
  name: string;
  role: string;
  carrera: 'Sistemas' | 'Mecánica' | 'Eléctrica' | 'Electronica';
  image?: string;
  email?: string;
  linkedin?: string;
  isAdvisor?: boolean;
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Hector Gerardo Pliego Lugo',
    role: 'Estudiante',
    carrera: 'Sistemas',
    email: 'pliegolugohectorgerardo@gmail.com',
    linkedin: 'https://linkedin.com',
    isAdvisor: false,
  },
  {
    id: '2',
    name: 'Esteban Valente Arenas',
    role: 'Estudiante',
    carrera: 'Sistemas',
    email: 'estebanvalentearenas@gmail.com',
    isAdvisor: false,
  },
  {
    id: '3',
    name: 'Jesus Enrique Serrano Lopez',
    role: 'Estudiante',
    carrera: 'Sistemas',
    email: 'jesusenriqueserrano@gmail.com',
    isAdvisor: false,
  },
  {
    id: '4',
    name: 'Diego Arturo Roque Fernandez',
    role: 'Estudiante',
    carrera: 'Mecánica',
    email: 'diegoarturoroque@gmail.com',
    isAdvisor: false,
  },
  {
    id: '5',
    name: 'Erick Cuevas Sanchez',
    role: 'Estudiante',
    carrera: 'Eléctrica',
    email: 'erickcuesanchez@gmail.com',
    isAdvisor: false,
  },
  {
    id: 'asesora',
    name: 'Guadalupe Salas Lopez',
    role: 'Asesora',
    carrera: 'Electronica',
    email: 'guadalupe.salas@tecnm.mx',
    linkedin: 'https://linkedin.com',
    isAdvisor: true,
  },
];

export const students = teamMembers.filter((m) => !m.isAdvisor);
export const advisor = teamMembers.find((m) => m.isAdvisor);
