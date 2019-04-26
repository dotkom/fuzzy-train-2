import React from "react";
import styled from "styled-components";

import PolygonSVG from "./assets/Poly2.svg";

import Circles from "./assets/Circles"
import ClickablePolygon from "./assets/ClickablePolygon";
import MainMenu from "../components/homepageComponents/MainMenu";



const LowerPolygon = styled(PolygonSVG)`
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 60vmin;
  height: auto;
`;

const Homepage = () => {
  return (
    <>
      <Circles />
      <ClickablePolygon />
      <LowerPolygon />
      <MainMenu />
    </>
  )
};

export default Homepage;
