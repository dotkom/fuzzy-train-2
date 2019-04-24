import React from "react";
import Circle from "./Circle";
import Polygon1 from "./assets/Poly1.svg";
import Polygon2 from "./assets/Poly2.svg";
import Logo from "./assets/Logo.svg";
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
  top: 110px;
  left: 275px;
`;

const Homepage = () => (
  <div className="Frontpage">
    <StyledCircle />
    <PolyOne />
    <PolyTwo />
    <Logo/>
  </div>
);

export default Homepage;
