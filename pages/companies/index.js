import React, { useState } from 'react';
import GlobalStyle from '../components/GlobalStyle';
import MenuContainer from '../components/MenuComponents/MainMenu';
import { ThemeProvider, useTheme } from '../components/ThemeComponents/ThemeProvider';
import styled from 'styled-components';
import Markdown from '../components/Markdown';
import { withRouter } from 'next/router';
import Title from '../components/MenuComponents/Title';
import Footer from '../components/FooterComponents/Footer';
import GenerellInfo from './GenerellInfo';
import Tabs from './CompaniesTabs';

//Temporary file for å teste routing
const Bedrifter = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Title text="for bedrifter" />
      <Tabs/>
      <Footer />
    </ThemeProvider>
  );
};

export default Bedrifter;
