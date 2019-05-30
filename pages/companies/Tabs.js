import React from 'react';
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
      link: '/companies/profiling',
    },
    {
      text: 'Faglig',
      link: '/companies/educational',
    },
    {
      text: 'Meld Interesse',
      link: '/companies/report-interest',
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
