import React from 'react';
import { useTheme } from './ThemeProvider';

const ClickablePolygon = ({ className }) => {
  const themeState = useTheme();

  return (
    <svg className={className} width="815" height="439" viewBox="0 0 815 439" xmlns="http://www.w3.org/2000/svg">
      <path
        onClick={themeState.toggleTheme}
        d="M815 439C815 439 75 190.5 33 155.283C-9 120.065 3.5 82 0.5 0L815 0V439Z"
      />
    </svg>
  );
};

export default ClickablePolygon;
