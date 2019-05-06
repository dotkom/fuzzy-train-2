import React from 'react';
import styled from 'styled-components';
import FooterSVG from './Footer.svg';
import LogoSVG from '../MenuComponents/Logo.svg';

const Logo = styled(LogoSVG)`
  fill: ${props => props.theme.primary};
  width: 40vmin;
  position: absolute;
  bottom: 0px;
  right: 0px;
`;

const Footer = ({ className }) => {
  return (
    <div className={className}>
      <svg width="1925" height="360" viewBox="0 0 1920 355" xmlns="http://www.w3.org/2000/svg">
        <path d="M-117 0C-117 0 623 254.161 665 290.18C707 326.2 694.5 365.132 697.5 449H-117V0Z" fill="#DC942D" />
        <rect x="1920" y="355" width="1920" height="60" transform="rotate(-180 1920 355)" />
        <path d="M1920 300.5L0 300.5L1920 142L1920 300.5Z" />
      </svg>
      <Logo/>
    </div>
  );
};

const StyledFooter = styled(Footer)`
  width: 100%;
  svg {
    fill: ${props => props.theme.secondary};
  }
  ${Logo} {
    fill: ${props => props.theme.primary};
  }
`;
export default StyledFooter;
