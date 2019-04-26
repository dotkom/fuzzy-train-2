import React from 'react';
import styled from 'styled-components'
import { useTheme } from '../../components/themeComponents/ThemeProvider';

const ClickablePolygonSVG = ({ className }) => {
  const themeState = useTheme();

  return (
    <svg className={className} width="815" height="439" viewBox="0 0 815 439" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path onClick={themeState.toggleTheme} d="M815 439C815 439 75 190.5 33 155.283C-9 120.065 3.5 82 0.5 0L815 0V439Z" />
    </svg>
  )
}

const ClickablePolygon = styled(ClickablePolygonSVG)`
  fill: ${props => props.theme.secondary};
  position: fixed;
  right: 0px;
  top: 0px;
  transition-property: background-color;
  transition-duration: 300ms;
  width: 60vmin;
  height: auto;
`

export default ClickablePolygon;