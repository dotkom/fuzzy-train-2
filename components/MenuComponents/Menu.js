import React from 'react';

import MenuTab from './MenuTab';

const Menu = ({ className, tabs, underline }) => {
  const MenuTabs = tabs.map((tab) => (
    <MenuTab link={tab.link} key={tab.text} underline={underline}>
      {tab.text}
    </MenuTab>
  ));

  return <div className={className}>{MenuTabs}</div>;
};

export default Menu;
