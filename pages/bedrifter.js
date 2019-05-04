import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import MenuContainer from './components/MenuComponents/MainMenu';
import { ThemeProvider, useTheme } from './components/ThemeComponents/ThemeProvider';
import styled from 'styled-components';
import Markdown from './components/Markdown';
import Title from './components/MenuComponents/Title';
import Footer from './components/FooterComponents/Footer';

const Menu = styled(MenuContainer)`
  min-width: 60%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
  align-items: auto;

  & > a {
    font-size: 14px;
  }
`;

const TopWrapper = styled.div`
  width: 60%;
  font-size: 14px;
`;

//Temporary file for å teste routing
const Bedrifter = () => {
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
  const tabs = [
    { text: 'Generell Info', link: '/students', isActive: false },
    { text: 'Profilering', link: '/', isActive: true },
    { text: 'Faglig', link: '/bedrifter', isActive: false },
    { text: 'Meld Interesse', link: '/bedrifter', isActive: false },
  ];

  return (
    <ThemeProvider>
      <GlobalStyle />
      <Title text="for bedrifter" />
      <Menu tabs={tabs} underline />
      <Markdown source={InfoboxSource} />
      <Footer />
    </ThemeProvider>
  );
};

export default Bedrifter;
