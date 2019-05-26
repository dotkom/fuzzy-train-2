import React from 'react';
import styled, { css } from 'styled-components';

import MenuTab from './MenuTab';

const MenuContainer = ({ className, tabs, underline }) => {
  const MenuTabs = tabs.map((tab, index) => (
    <MenuTab  link={tab.link} key={index} underline={underline}>{tab.text}</MenuTab>
  ));

  return <div className={className}>{MenuTabs}</div>;
};


const Menu = styled(MenuContainer)`
  display: flex;
  flex-flow: row;
  margin-bottom: 4rem;

  & > a {
    flex-basis: 100%;
    margin: 0 10px;
  }
`;

export default Menu;
