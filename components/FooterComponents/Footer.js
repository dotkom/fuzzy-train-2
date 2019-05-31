import React from 'react';
import styled from 'styled-components';
import LogoSVG from '../MenuComponents/Logo.svg';
import { useTheme } from '../ThemeComponents/ThemeContext';

const Logo = styled(LogoSVG)`
  width: 40vmin;
  fill: var(--primary);
  position: absolute;
  bottom: 0;
  right: 0;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  fill: var(--secondary);
`;

const Footer = ({ theme }) => {
  const themeState = useTheme();
  return (
    <Container>
      <svg width="1920" height="355" viewBox="0 0 1920 355" xmlns="http://www.w3.org/2000/svg">
        <path d="M-117 0C-117 0 623 254.161 665 290.18C707 326.2 694.5 365.132 697.5 449H-117V0Z" fill="#DC942D" />
        <rect x="1920" y="356" width="1920" height="54.9998" transform="rotate(-180 1920 356)" />
        <path d="M1920 301.5L0 301.5L1920 143L1920 301.5Z" />
      </svg>
    </Container>
  );
};

export default Footer;
