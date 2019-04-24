import React from "react";
import Circle from "./Circle";
import Polygon1 from "./Polygon1";
import Polygon2 from "./Polygon2";
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
  </div>
);

export default Homepage;
