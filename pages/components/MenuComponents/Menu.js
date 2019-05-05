import React from 'react';
import styled, { css } from 'styled-components';

import MenuTabContainer from './MenuTab';

const MenuTab = styled(MenuTabContainer)`
  font-weight: 900;
  font-size: 1.5rem;
  line-height: 2em;

  @media only screen and (max-width: 768px) {
    font-size: 1.5em;
  }

  ${props =>
    props.underline &&
    css`
      border-bottom: ${props.isActive ? '3px' : '2px'} solid;
      border-bottom-color: ${props => (props.isActive ? props.theme.orange : '#c4c4c4')};
    `}
`;

const SubMenuTab = styled(MenuTabContainer)`
  font-size: 14px;
`;

const Menu = ({ className, tabs, isMainMenu, activeTab, underline }) => {
  const MenuTabs = tabs.map((tab, index) => (
    <MenuTab
      text={tab.text}
      link={tab.link}
      isActive={index == activeTab}
      key={index}
      underline={underline}
      browserUrl={tab.browserUrl}
    />
  ));

  return <div className={className}>{MenuTabs}</div>;
};

export default Menu;
