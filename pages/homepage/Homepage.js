import React from 'react';
import styled from 'styled-components';
import PolygonSVG from './assets/Poly2.svg';
import MainMenuContainer from '../components/MenuComponents/MainMenu';
import ThemeSwitcher from '../components/ThemeComponents/ThemeSwitchers';
import LogoSVG from './assets/Logo.svg';

const PolygonContainer = styled.div`
  width: 100%;
  display: flex;
`;

const LowerPolygon = styled(PolygonSVG)`
  fill: ${props => props.theme.orange};
  width: 70vmin;
  height: min-content;
  align-self: flex-end;
`;

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

const MainMenu = styled(MainMenuContainer)`
  max-width: 70rem;
  max-width: 1200px;
  padding: 0 40px;
  display: grid;

  @media only screen and (max-width: 768px) {
    padding: 0 25%;
    height: 15rem;
  }
`;

const Homepage = () => {
  const tabs = [
    { text: 'Nye Studenter', link: '/students', isActive: false },
    { text: 'Hovedsiden', link: '/', isActive: true },
    { text: 'Bedrifter', link: '/bedrifter', isActive: false },
  ];

  return (
    <>
      <ThemeSwitcher />
      <Logo />
      <MainMenu tabs={tabs} />
      <PolygonContainer>
        <LowerPolygon />
      </PolygonContainer>
    </>
  );
};

export default Homepage;
