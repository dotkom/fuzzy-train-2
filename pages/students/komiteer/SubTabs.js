import React from 'react';
import Menu from '../../components/MenuComponents/Menu';
import styled from 'styled-components';

const SubTabsContainer = ({ className }) => {
  const tabs = [
    {
      text: 'Om komiter',
      link: '/students/komiteer',
    },
    {
      text: 'Arrkom',
      link: '/students/komiteer/arrkom',
    },
    {
      text: 'Bedkom',
      link: '/students/komiteer/bedkom',
    },
    {
      text: 'Dotkom',
      link: '/students/komiteer/dotkom',
    },
    {
      text: 'Fagkom',
      link: '/students/komiteer/fagkom',
    },
    {
      text: 'Prokom',
      link: '/students/komiteer/prokom',
    },
    {
      text: 'Seniorkom',
      link: '/students/komiteer/seniorkom',
    },
    {
      text: 'Trikom',
      link: '/students/komiteer/trikom',
    },
  ];

  return (
    <>
      <Menu tabs={tabs} className={className} />
    </>
  );
};

const SubTabs = styled(SubTabsContainer)`
  display: flex;
  flex-flow: row;

  & > a {
    flex-basis: 100%;
    margin: 0 10px;
    font-size: 18px;
    font-weight: 500;
  }
`;

export default SubTabs;
