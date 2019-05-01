import React from 'react';
import styled from 'styled-components';

import MenuTab from './MenuTab';

const MainMenu = ({ className, tabs, underline}) => {
  const MenuTabs = tabs.map((tab, index) => (
    <MenuTab text={tab.text} link={tab.link} isActive={tab.isActive} key={index} underline={underline}/>
  ));

  return <div className={className}>{MenuTabs}</div>;
};


export default MainMenu;
