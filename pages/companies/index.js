import React, { useState } from 'react';
import GlobalStyle from '../components/GlobalStyle';
import { ThemeProvider, useTheme } from '../components/ThemeComponents/ThemeProvider';
import Title from '../components/MenuComponents/Title';
import Footer from '../components/FooterComponents/Footer';
import Tabs from './CompaniesTabs';

//Temporary file for å teste routing
const Bedrifter = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Title text="for bedrifter" />
      <Tabs />
      <Footer />
    </ThemeProvider>
  );
};

export default Bedrifter;
