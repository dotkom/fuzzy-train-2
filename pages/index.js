import React from 'react';
import Homepage from './homepage/Homepage';
import GlobalStyle from './components/GlobalStyle';
import { ThemeProvider } from './components/ThemeComponents/ThemeProvider';

const Index = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Homepage />
    </ThemeProvider>
  );
};

export default Index;
