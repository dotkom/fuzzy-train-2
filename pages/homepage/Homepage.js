import React from 'react';
import styled from 'styled-components';
import PolygonSVG from '../components/FooterComponents/FooterPolygon.svg';
import MainMenuContainer from '../components/MenuComponents/MainMenu';
import ThemeSwitcher from '../components/ThemeComponents/ThemeSwitchers';
import LogoSVG from '../components/MenuComponents/Logo.svg';

const LowerPolygon = styled(PolygonSVG)`
  fill: ${props => props.theme.orange};
  width: 60vmin;
  position: fixed;
  bottom: 0;
  left: 0;
  overflow: visible;
`;

const Main = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: fit-content;
  text-align: center;
  transform: translate(-50%, -50%);
`;

const Logo = styled(LogoSVG)`
  fill: ${props => props.theme.secondary};
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
  max-width: 60rem;
  padding: 0 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
  align-items: auto;
  color: ${props => props.theme.secondary};
  ${props =>
    props.isActive &&
    css`
      border-bottom: 3px solid #dc942d;
      opacity: 1;
    `}
  @media only screen and (max-width: 1024px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 768px) {
    padding: 0 10%;
    font-size: 12px;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: auto;
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
      <Main>
        <Logo />
        <MainMenu tabs={tabs} underline />
      </Main>
      <LowerPolygon />
    </>
  );
};

export default Homepage;
