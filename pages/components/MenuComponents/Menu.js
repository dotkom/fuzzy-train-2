import React from 'react';
import styled, { css } from 'styled-components';

import MenuTab from './MenuTab';

const MenuContainer = ({ className, tabs, activeTab, underline }) => {
  const MenuTabs = tabs.map((tab, index) => (
    <MenuTab text={tab.text} link={tab.link} isActive={index == activeTab} key={index} underline={underline} />
  ));

  return <div className={className}>{MenuTabs}</div>;
};


const Menu = styled(MenuContainer)`
  display: flex;
  flex-flow: row;
  margin-bottom: 4rem;

  & > a {
    font-size: 1.25em;
    flex-basis: 100%;
    margin: 0 10px;
  }
`;

export default Menu;
