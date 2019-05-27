import React, { useState } from 'react';
import styled from 'styled-components';
import Menu from 'components/MenuComponents/Menu';

const TabsContainer = ({ className }) => {
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
      <Menu tabs={tabs} underline className={className} />
    </>
  );
};

const Tabs = styled(TabsContainer)`
  display: flex;
  flex-flow: row;
  margin-bottom: 4rem;

  & > a {
    flex-basis: 100%;
    margin: 0 10px;
  }
`;

export default Tabs;
