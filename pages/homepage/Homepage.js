import React from "react";
import styled from "styled-components";

import PolygonSVG1 from "./assets/Poly1.svg";
import PolygonSVG2 from "./assets/Poly2.svg";
import LogoSVG from "./assets/Logo.svg";
import CircleSVG from "./assets/Circles.svg";

import ThemeToggler from "../components/themeComponents/ThemeToggler"

const UpperPolygon = styled(PolygonSVG1)`
  fill: ${props => props.theme.secondary};
  position: fixed;
  right: 0px;
  top: -2.6px;
  transition-property: background-color;
  transition-duration: 300ms;
`;

const LowerPolygon = styled(PolygonSVG2)`
  position: fixed;
  left: 2px;
  bottom: 1px;
`;

const Circles = styled(CircleSVG)`
  fill: ${props => props.theme.secondary};
  position: fixed;
  top: 210px;
  left: 275px;
`;

const Logo = styled(LogoSVG)`
  fill: ${props => props.theme.secondary};
  fill-opacity:1;
  fill-rule:nonzero;
  stroke:none;
`;

const Homepage = () => (
  <>
    <ThemeToggler><Circles /></ThemeToggler>
    <ThemeToggler><UpperPolygon /></ThemeToggler>
    <LowerPolygon />
    <Logo />
  </>
);

export default Homepage;
