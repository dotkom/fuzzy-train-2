import React from "react";
import Circle from "./Circle";
import Polygon1 from "./assets/Poly1.svg";
import Polygon2 from "./assets/Poly2.svg";
import Logo from "./assets/Logo.svg";
import Knowit from "./assets/Knowit.svg";
import styled from "styled-components";

const PolyOne = styled(Polygon1)`
  position: fixed;
  right: 0px;
  top: -2.6px;
`;

const PolyTwo = styled(Polygon2)`
  position: fixed;
  left: 2px;
  bottom: 1px;
`;

const StyledCircle = styled(Circle)`
  position: fixed;
  top: 125px;
  left: 235px;
`;

const StyledLogo = styled(Logo)`
  width: 500px;
  height: 133px;
  position: fixed;
  left: 700px;
  top: 365px;
`;

const StyledKnowit = styled(Knowit)`
  position: fixed;
  right: 5px;
  bottom: 0px;
  width: 150px;
`;

const Homepage = () => (
  <div className="Frontpage">
    <StyledCircle />
    <PolyOne />
    <PolyTwo />
    <StyledLogo />
    <StyledKnowit />
  </div>
);

export default Homepage;
