import React from 'react';
import Markdown from '../../components/Markdown';
import PageBody from '../../components/MenuComponents/PageBody';
import Tabs from '../Tabs';
import SubTabs from './SubTabs';

const Source = `
# Om Online
Online er linjeforeningen for informatikkstudenter ved NTNU i Trondheim.
Linjeforeningens oppgave er å forbedre studiemiljøet ved å fremme sosialt samvær, faglig kompetanse og kontakt med næringslivet.

Linjeforeningen består av omtrent 100 frivillige medarbeidere, fordelt over Hovedstyret, komiteer og nodekomiteer. 
I tillegg til vervene i linjeforeningen er mange studenter også engasjert i Realfagskjelleren, Datakameratene FK og Casual Gaming.

Vi har kontorer på Gløshaugen i Høgskoleringen 3, også kjent som P15.
Her fins det mat og drikke for alle som vil ha, og ofte kan det være greit å finne hjelp til en øving eller et prosjekt man jobber med. 
Det er heller ikke uhørt at triKom serverer vafler eller kake.
`;

const Komiteer = () => {
  return (
    <PageBody title="for studenter">
      <Tabs activeTab={1} />
      <SubTabs />
      <Markdown source={Source} />
    </PageBody>
  );
};

export default Komiteer;
