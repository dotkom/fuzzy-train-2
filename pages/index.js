import React from 'react';
import Homepage from './home/Homepage';
import GlobalStyle from 'components/GlobalStyle.js';
import { getDefaultTheme } from '../components/ThemeComponents/ThemeColorschemes';

const Index = () => {
  return (
    <>
      <GlobalStyle theme={getDefaultTheme()} />
      <Homepage />
    </>
  );
};

export default Index;
