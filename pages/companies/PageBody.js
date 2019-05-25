import React from 'react';
import GlobalStyle from '../components/GlobalStyle';
import { ThemeProvider, useTheme } from '../components/ThemeComponents/ThemeProvider';
import Footer from '../components/FooterComponents/Footer';
import Title from '../components/MenuComponents/Title';

//Temporary file for å teste routing
const CompaniesBody = ({ children }) => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Title text="for bedrifter" />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default CompaniesBody;
