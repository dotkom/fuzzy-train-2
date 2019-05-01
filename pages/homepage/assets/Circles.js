import React from 'react';
import { useTheme } from './../../components/ThemeComponents/ThemeProvider'

const Circles = ({ className }) => {
  const themeState = useTheme();
  return (
    <svg className={className} width="217" height="245" viewBox="0 0 217 245" xmlns="http://www.w3.org/2000/svg">
      <circle onClick={themeState.toggleTheme} cx="126" cy="91" r="91" />
      <circle cx="63" cy="182" r="63" fill="#FAA21B" />
    </svg>
  );
};

export default Circles;
