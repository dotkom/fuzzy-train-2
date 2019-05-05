import React from 'react';
import styled from 'styled-components';

import MenuTab from './MenuTab';

const MainMenu = ({ className, tabs, underline, activeTab }) => {
  const MenuTabs = tabs.map((tab, index) => (
    <MenuTab text={tab.text} link={tab.link} isActive={index == activeTab} key={index} underline={underline} browserUrl={tab.browserUrl} />
  ));

  return <div className={className}>{MenuTabs}</div>;
};

export default MainMenu;