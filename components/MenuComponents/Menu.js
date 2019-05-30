import React from 'react';

import MenuTab from './MenuTab';

const Menu = ({ className, tabs, underline }) => {
  const MenuTabs = tabs.map((tab, index) => (
    <MenuTab link={tab.link} key={index} underline={underline}>
      {tab.text}
    </MenuTab>
  ));

  return <div className={className}>{MenuTabs}</div>;
};

export default Menu;
