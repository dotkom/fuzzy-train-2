import React, { useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'next/router';
import GenerellInfo from './GenerellInfo';
import Profilering from './Profilering';
import Faglig from './Faglig';
import InteresseForm from './InteresseForm';
import MenuContainer from '../components/MenuComponents/Menu';

const PageBody = styled.div`
  width: 100%;
  height: 100%;
  padding: 2em;
  display: flex;
  justify-content: center;
`;
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

const CompanyTabs = ({ router }) => {
  const {
    query: { tab },
  } = router;
  const tabs = [
    {
      text: 'Generell Info',
      link: { pathname: '/companies', query: { tab: 'GenerellInfo' } },
      browserUrl: '/companies/',
    },
    {
      text: 'Profilering',
      link: { pathname: '/companies', query: { tab: 'Profilering' } },
      browserUrl: '/companies/profilering',
    },
    {
      text: 'Faglig',
      link: { pathname: '/companies', query: { tab: 'Faglig' } },
      browserUrl: '/companies/faglig',
    },
    {
      text: 'Meld Interesse',
      link: { pathname: '/companies', query: { tab: 'MeldInteresse' } },
      browserUrl: '/companies/meldinteresse',
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const changeTab = tab => {
    if (activeTab != tab) setActiveTab(tab);
  };
  return (
    <>
      <Menu tabs={tabs} underline activeTab={activeTab} />
      <PageBody>
        {(() => {
          switch (tab) {
            case undefined:
              changeTab(0);
              return <GenerellInfo />;
            case 'GenerellInfo':
              changeTab(0);
              return <GenerellInfo />;
            case 'Profilering':
              changeTab(1);
              return <Profilering />;
            case 'Faglig':
              changeTab(2);
              return <Faglig />;
            case 'MeldInteresse':
              changeTab(3);
              return <InteresseForm />;
          }
        })()}
      </PageBody>
    </>
  );
};

export default withRouter(CompanyTabs);
