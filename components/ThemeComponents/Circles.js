import React from 'react';
import styled from 'styled-components';
import { useTheme } from './ThemeToggleProvider.js';

const Circles = ({ className }) => {
  const themeState = useTheme()
  return (
    <svg className={className} width="217" height="245" viewBox="0 0 217 245" xmlns="http://www.w3.org/2000/svg">
      <circle onClick={themeState.toggleTheme} cx="126" cy="91" r="91" />
      <circle cx="63" cy="182" r="63" />
    </svg>
  );
};

const StyledCircles = styled(Circles)`
  circle:first-child {
    fill: var(--secondary);
  }

  circle:last-child {
    fill: var(--orange);
  }
`;

export default StyledCircles;
