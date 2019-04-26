import React from 'react';
import styled from 'styled-components'
import { useTheme } from '../../components/themeComponents/ThemeProvider';

const CirclesSVG = ({ className }) => {
  const themeState = useTheme()
  return (
    <svg className={className} width="217" height="245" viewBox="0 0 217 245" xmlns="http://www.w3.org/2000/svg">
      <circle onClick={themeState.toggleTheme} cx="126" cy="91" r="91" />
      <circle cx="63" cy="182" r="63" fill="#DC942D" />
    </svg>
  )
}

const Circles = styled(CirclesSVG)`
  fill: ${props => props.theme.secondary};
  position: absolute;
  left: 10%;
  top: 10%;
  width: 30vmin;
  height: auto;
`;

export default Circles;