import React from 'react';
import styled from "styled-components";

import LogoSVG from '../../homepage/assets/Logo.svg'
import MenuTab from './MenuTab'

const Logo = styled(LogoSVG)`
  fill: ${props => props.theme.secondary};
  fill-opacity:1;
  fill-rule:nonzero;
  stroke:none;
  padding-bottom: 5%;
`;

const MainMenuContainer = ({ className }) => {
  return (
    <div className= {className}>
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
display: flex;
justify-content: space-between;
flex-direction: row;
min-width: 70vw;
`

const MainMenu = styled(MainMenuContainer)`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  align-self: center;

`
export default MainMenu