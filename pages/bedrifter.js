<<<<<<< HEAD
import React from "react";
import { createGlobalStyle } from "styled-components";
import MeldInteresse from "./meldInteresse.js";
import { ThemeProvider } from "./components/themeComponents/ThemeProvider.js";

//Temporary file for å teste routing
const GlobalStyle = createGlobalStyle`
body {
  background-color: ${props => props.theme.primary};
  font-family: 'Source Sans Pro', 'sans-serif';
  color: #ffffff;
}

`;
=======
import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import Menu from './components/MenuComponents/MainMenu';
import { ThemeProvider } from './components/ThemeComponents/ThemeProvider';

//Temporary file for å teste routing
>>>>>>> 703268604a97094b8d12ab44e9726e1e47ad0531
const Bedrifter = () => {
  const tabs = [
    { text: 'Generell Info', link: '/students', isActive: false },
    { text: 'Profilering', link: '/', isActive: true },
    { text: 'Faglig', link: '/bedrifter', isActive: false },
    { text: 'Meld Interesse', link: '/bedrifter', isActive: false },
  ];

  return (
    <ThemeProvider>
      <GlobalStyle />
<<<<<<< HEAD
      <MeldInteresse />
    </ThemeProvider>

=======
      <Menu tabs={tabs} />
    </ThemeProvider>
>>>>>>> 703268604a97094b8d12ab44e9726e1e47ad0531
  );
};

export default Bedrifter;
