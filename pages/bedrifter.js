import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import Menu from './components/MenuComponents/MainMenu';
import { ThemeProvider } from './components/ThemeComponents/ThemeProvider';

//Temporary file for å teste routing
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
      <Menu tabs={tabs} />
    </ThemeProvider>
  );
};

export default Bedrifter;
