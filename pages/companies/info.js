import React from 'react';
import Markdown from 'components/Markdown';

const InfoboxSource = `
  # Generell Info
  Er du en bedrift som er på jakt etter skarpe IT-studenter?  
  Da vil vi gjerne høre fra deg! Les videre for å finne ut hva vi kan tilby. 
  
  Online er linjeforeningen for informatikkstudentene ved NTNU. Våre studenter går Bachelor- 
  eller Mastergradstudium i informatikk. Dette innebærer blant annet å lære om utvikling,
  forbedring, evaluering og bruk av datasystemer. For mer informasjon om studiet, se NTNU sine offisielle nettsider.
  
  Linjeforeningen har gjennom flere år opparbeidet seg et repertoar av tjenester som vi tilbyr våre
  studenter. I samarbeid med næringslivet tilbyr vi kurs og bedriftspresentasjoner for å gi 
  studentene våre en bredere og dypere fagkunnskap samt et innblikk i hverdagen til aktuelle arbeidsplasser.
  
  Send oss en forespørsel for å komme i kontakt. 
  Vi gleder oss til å samarbeide med dere! 
  
  Send epost til bedriftskontakt
  `;

const GenerellInfo = () => {
  return <Markdown source={InfoboxSource} />;
};

export default GenerellInfo;
