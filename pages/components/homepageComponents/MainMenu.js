import React from 'react';
import styled from 'styled-components';

import LogoSVG from '../../homepage/assets/Logo.svg';
import MenuTab from './MenuTab';

const Logo = styled(LogoSVG)`
  fill: ${props => props.theme.secondary};
  fill-opacity: 1;
  fill-rule: nonzero;
  stroke: none;
  width: 50vmin;
  margin-bottom: 1.5rem;
  @media only screen and (max-width: 768px) {
    height: auto;
    width: 20rem;
    margin-bottom: 3rem;
  }
`;

const MainMenuContainer = ({ className }) => {
  return (
    <div className={className}>
      <Logo />
      <Wrapper>
        <MenuTab text="Nye studenter" link="/student" />
        <MenuTab text="Hovedsiden" link="/" isActive />
        <MenuTab text="Bedrifter" link="/bedrifter" />
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
  width: 100%;
  align-items: auto;

  @media only screen and (max-width: 768px) {
    grid-template-columns: auto;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 2rem;
    width: 15rem;
  }
`;

const MainMenu = styled(MainMenuContainer)`
  max-width: 70rem;
  max-width: 1200px;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;

  @media only screen and (max-width: 768px) {
    padding: 0 25%;
    height: 25rem;
  }
`;
export default MainMenu;
