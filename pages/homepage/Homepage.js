import React from "react";
import SwitchTheme from "./SwitchTheme";
import Polygon from "./PolygonSVG";
import Polygon2 from "./assets/Poly2.svg";
import Logo from "./assets/Logo.svg";
import styled from "styled-components";
import CircleSVG from "./CircleSVG";

const PolyOne = styled(Polygon)`
  fill: var(--secondary);
  transition-property: background-color;
  transition-duration: 300ms;
  position: fixed;
  right: 0px;
  top: -2.6px;
`;

const PolyTwo = styled(Polygon2)`
  position: fixed;
  left: 2px;
  bottom: 1px;
`;

const Circles = styled(CircleSVG)`
  fill: var(--secondary);
  position: fixed;
  top: 210px;
  left: 275px;
`;

const Homepage = () => (
  <div>
    <SwitchTheme>
      <Circles />
    </SwitchTheme>
    <SwitchTheme>
      <PolyOne />
    </SwitchTheme>
    <PolyTwo />
    <Logo />
  </div>
);

export default Homepage;
