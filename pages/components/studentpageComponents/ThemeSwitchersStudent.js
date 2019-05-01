import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../themeComponents/ThemeProvider';
import CirclesSVG from '../../homepage/assets/Circles';

// const Circles = styled(CirclesSVG)`
//   height: 10rem;
//   width: auto;
//   margin: 3rem 0 0 3rem;
//   align-self: flex-end;
// `;

// const ThemeSwitchersContainer = ({ className }) => {
//   return (
//     <div className={className}>
//       <Circles />
//     </div>
//   );
// };

const ThemeSwitchersContainer = ({ className }) => {
  return <div className={className} />;
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
