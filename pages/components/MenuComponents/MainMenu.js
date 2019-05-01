import React from 'react';
import styled from 'styled-components';

import MenuTab from './MenuTab';

const MainMenu = ({ className, tabs }) => {
  const MenuTabs = tabs.map(
    (tab, index) => <MenuTab text={tab.text} link={tab.link} isActive={tab.isActive} key={index}/>
  );

  return (
    <div className={className}>
      {MenuTabs}
    </div>
  );
};

const StyledMenu = styled(MainMenu)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
  width: 100%;
  align-items: auto;
  color: ${props => props.theme.secondary};
  ${props =>
    props.isActive &&
    css`
      border-bottom: 3px solid #dc942d;
      opacity: 1;
    `}
  @media only screen and (max-width: 768px) {
    grid-template-columns: auto;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 2rem;
    width: 15rem;
  }
`;

export default StyledMenu;
