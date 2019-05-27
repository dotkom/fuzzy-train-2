import React from 'react';
import Homepage from './home/Homepage';
import GlobalStyle from '../components/GlobalStyle';
import { ThemeProvider, useTheme } from '../components/ThemeComponents/ThemeProvider';

const Index = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Homepage />
    </ThemeProvider>
  );
};

export default Index;
