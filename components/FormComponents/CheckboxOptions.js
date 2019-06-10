const currentYear = new Date().getFullYear();
const nextYear = currentYear + 1;

export const SemesterOptions = [
  {
    text: 'Høst ' + currentYear,
    name: 'h' + currentYear,
  },
  {
    text: 'Vår ' + nextYear,
    name: 'v' + nextYear,
  },
  {
    text: 'Høst ' + nextYear,
    name: 'h' + nextYear,
  },
];

export const EventOptions = [
  {
    text: 'IT-ekskursjon (ITEX)',
    name: 'itex',
  },
  {
    text: 'Bedriftpresentasjon',
    name: 'bedpres'
  },
  {
    text: 'Faglig Arrangement/Kurs',
    name: 'educational'
  },
  {
    text: 'Techtalks',
    name: 'techtalks'
  },
  {
    text: 'Alternativt Arrangement',
    name: 'alternative'
  }
];

export const ExtraOptions = [
  {
    text: 'Annonse i linjeforeningsbladet Offline',
    name: 'paperad'
  },
  {
    text: 'Samarbeid med andre linjeforeninger',
    name: 'collaboration'
  },
  {
    text: 'Jobbannonse på nettsiden',
    name: 'webad'
  },
  {
    text: 'Profilering for startups',
    name: 'profiling'
  },
  {
    text: 'Annet (spesifiser i kommentarfeltet)',
    name: 'other'
  }
]