import React, { useState } from 'react';
import Menu from '../components/MenuComponents/Menu';

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
      <Menu tabs={tabs} underline/>
    </>
  );
};

export default Tabs;
