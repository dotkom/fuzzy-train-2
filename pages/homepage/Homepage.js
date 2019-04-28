import React from "react";
import styled from "styled-components";

import PolygonSVG from "./assets/Poly2.svg";

import MainMenu from "../components/homepageComponents/MainMenu";
import ThemeSwitcher from "../components/homepageComponents/ThemeSwitchers";

const PolygonContainer = styled.div`
  width: 100%;
  display: flex;
`

const LowerPolygon = styled(PolygonSVG)`
  width: 70vmin;
  height: min-content;
  align-self: flex-end;
`;

const Homepage = () => {
  return (
    <>
      <ThemeSwitcher />
      <MainMenu />
      <PolygonContainer>
        <LowerPolygon />
      </PolygonContainer>
    </>
  )
};

export default Homepage;
