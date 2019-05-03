import React from 'react';
import styled from 'styled-components';
import CirclesSVG from '../../homepage/assets/Circles';
import ClickablePolygonSVG from '../../homepage/assets/ClickablePolygon';

const Circles = styled(CirclesSVG)`
  position: fixed;
  top: 10vmin;
  left: 20vmin;
  height: 25vmin;
`;

const ClickablePolygon = styled(ClickablePolygonSVG)`
  width: 80vmin;
  position: fixed;
  top: 0;
  right: 0;
`;

const ThemeSwitchersContainer = ({ className }) => {
  return (
    <div className={className}>
      <Circles />
      <ClickablePolygon />
    </div>
  );
};

const ThemeSwitcher = styled(ThemeSwitchersContainer)`
  fill: ${props => props.theme.secondary};
  transition-property: background-color;
  transition-duration: 300ms;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export default ThemeSwitcher;
