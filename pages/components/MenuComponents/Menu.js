import React from 'react';
import styled, { css } from 'styled-components';

import MenuTab from './MenuTab';

const Menu = ({ className, tabs, activeTab, underline }) => {
  const MenuTabs = tabs.map((tab, index) => (
    <MenuTab text={tab.text} link={tab.link} isActive={index == activeTab} key={index} underline={underline} />
  ));

  return <div className={className}>{MenuTabs}</div>;
};

export default Menu;
