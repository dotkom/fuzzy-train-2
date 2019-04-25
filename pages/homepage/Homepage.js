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
  top: 0%;
  width: 40%;
`;

const PolyTwo = styled(Polygon2)`
  position: fixed;
  left: 0px;
  bottom: 0%;
  width: 45%;
`;

const StyledCircle = styled(Circle)`
  position: fixed;
  top: 12.5%;
  left: 5%;
  width: 25%;
  height: 25%;
`;

const StyledLogo = styled(Logo)`
  position: fixed;
  width: 25%;
  height: 20%;
  left: 37%;
  top: 36%;
  @media all and (max-width: 1000px) and (min-width: 700px) {
    width: 200px;
  }
  @media all and (max-width: 699px) {
    top: 25%;
    left: 23%;
    width: 200px;
  }
`;

const StyledKnowit = styled(Knowit)`
  position: fixed;
  right: 5px;
  bottom: -10px;
  width: 100px;
`;

const StyledFrontpage = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
`;

const Homepage = () => (
  <StyledFrontpage className="Frontpage">
    <StyledCircle />
    <PolyOne />
    <PolyTwo />
    <StyledLogo />
    <StyledKnowit />
  </StyledFrontpage>
);

export default Homepage;
