import React from 'react';
import Homepage from './homepage/Homepage';
import GlobalStyle from './components/GlobalStyle';
import { ThemeProvider, useTheme } from './components/ThemeComponents/ThemeProvider';

const Index = () => {
  console.log(useTheme())
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Homepage />
    </ThemeProvider>
  
  );
};

export default Index;
