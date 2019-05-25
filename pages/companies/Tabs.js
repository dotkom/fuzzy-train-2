import React, { useState } from 'react';
import styled from 'styled-components';
import GenerellInfo from './info';
import Profilering from './profilering';
import Faglig from './faglig';
import InteresseForm from './meldinteresse';
import MenuContainer from '../components/MenuComponents/Menu';

const Menu = styled(MenuContainer)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
  align-items: auto;
  margin-bottom: 4rem;

  & > a {
    font-size: 1.25em;
  }
`;

const Tabs = ({activeTab}) => {
  const tabs = [
    {
      text: 'Generell Info',
      link: '/companies',
    },
    {
      text: 'Profilering',
      link: '/companies/profilering',
    },
    {
      text: 'Faglig',
      link: '/companies/faglig',
    },
    {
      text: 'Meld Interesse',
      link: '/companies/meldinteresse',
    },
  ];

  return (
    <>
      <Menu tabs={tabs} activeTab={activeTab} underline/>
    </>
  );
};

export default Tabs;
