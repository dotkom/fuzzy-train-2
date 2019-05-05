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
const PageBody = styled.div`
  width: 100%;
  height: 100%;
  padding: 2em;
`;
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
