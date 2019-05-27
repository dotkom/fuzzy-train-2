import React, { useState } from 'react';
import Menu from '../components/MenuComponents/Menu';
import styled from 'styled-components';

const TabsContainer = ({ className }) => {
  const tabs = [
    {
      text: 'Organisasjonen',
      link: '/students',
    },
    {
      text: 'Komiteer',
      link: '/students/komiteer',
    },
    {
      text: 'Andre verv',
      link: '/students/andreverv',
    },
    {
      text: 'Annet',
      link: '/students/annet',
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
  margin-bottom: 1rem;

  & > a {
    flex-basis: 100%;
    margin: 0 10px;
  }
`;

export default Tabs;
