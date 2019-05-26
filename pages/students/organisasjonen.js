import React from 'react';
import Markdown from '../components/Markdown';

const Source = `
# Om Online
Online er linjeforeningen for informatikkstudenter ved NTNU i Trondheim.
Linjeforeningens oppgave er å forbedre studiemiljøet ved å fremme sosialt samvær, faglig kompetanse og kontakt med næringslivet.

Linjeforeningen består av omtrent 100 frivillige medarbeidere, fordelt over Hovedstyret, komiteer og nodekomiteer. 
I tillegg til vervene i linjeforeningen er mange studenter også engasjert i Realfagskjelleren, Datakameratene FK og Casual Gaming.

Vi har kontorer på Gløshaugen i Høgskoleringen 3, også kjent som P15. Her fins det mat og drikke for alle som vil ha, og ofte kan det være greit å finne hjelp til en øving eller et prosjekt man jobber med. 
Det er heller ikke uhørt at triKom serverer vafler eller kake.

Ekskursjoner, kurs og presentasjoner fra bedrifter er ukentlige hendelser hos oss. 
Mange arrangementer er sponset av linjeforeningen eller bedrifter slik at du kan hygge deg i godt selskap selv om studielånet er langt unna.

I de siste årene har Online hatt en eventyrlig vekst på alle områder, og har etablert seg som en betydningsfull organisasjon i Trondheim. 
Fokus på samarbeid og kommunikasjon har drevet frem mange gode initiativer hvor vi har stått langt fremme som pådrivere.

Hos oss vil du stifte nye vennskap som vil vare livet ut, og hjelpe deg når du skal ut i arbeidslivet. Du vil trives i Online!

# Hovedstyret
Hovedstyret velges av linjeforeningens medlemmer på generalforsamlingen i løpet av vårsemesteret og sitter ett år frem i tid. 
Styret består av leder, nestleder og alle komitelederne.

Hovedstyret er først og fremst en møteplass for koordinering av de forskjellige komiteene.
Styret driver også med økonomistyring og annet administrativt arbeid. 

Hovedstyret er også linjeforeningens ansikt utad, og opprettholder kontakten med fakultet, institutt og representerer Online ved forskjellige anledninger.

Hovedstyret består av:

Leder: August Sollesnes Solvang

Nestleder: Henrik Liodden Munkeberg

Økonomiansvarlig: Kaja Sofie Lundgaard

Leder arrkom: Alis Wilson

Leder bedkom: Sigrun Nummedal

Leder dotkom: Ole Anders Stokker

Leder fagkom: Andreas Amundsen

Leder prokom: Benedicte Myrvoll 

Leder trikom: Silje Marie Savland Moksnes

Spørsmål om Online? Send oss en epost (til hovedstyret@online.ntnu.no)!

# Hovedsamarbeidspartner

Vår hovedsamarbeidspartner er Knowit. De har vært en aktiv bidragsyter for miljøet på informatikk
i mange år via bedriftspresentasjoner, kurs og arrangement i fadderukene.

Onlines hovedsamarbeidspartner er en sterk bidragsyter for at vi skal kunne tilby et bredt spekter av aktiviteter til våre studenter.
Vi har et tett samarbeid rundt det å skape gode kurs, bedriftspresentasjoner, og ikke minst får vi mye hjelp rundt opplegget til fadderukene!

Vi prøver kontinuerlig å forbedre de aktivitetene vi har, samt inkludere vår hovedsamarbeidspartner i nye arrangementer.
`;

const OmOss = () => {
  return <Markdown source={Source} />;
};

export default OmOss;
