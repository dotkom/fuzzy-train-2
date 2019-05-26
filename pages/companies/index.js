import React, { useState } from 'react';
import GlobalStyle from '../components/GlobalStyle';
import { ThemeProvider, useTheme } from '../components/ThemeComponents/ThemeProvider';
import Title from '../components/MenuComponents/Title';
import Footer from '../components/FooterComponents/Footer';
import Tabs from './Tabs';
import GenerellInfo from './info';
import PageBody from '../components/MenuComponents/PageBody';

//Temporary file for å teste routing
const Bedrifter = () => {
  return (
    <PageBody title="for bedrifter">
      <Tabs activeTab={0}/>
      <GenerellInfo />
    </PageBody>
  );
};

export default Bedrifter;
