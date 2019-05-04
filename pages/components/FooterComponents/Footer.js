import React from 'react';
import styled from 'styled-components';
import RightPolygonSVG from './RightFooter.svg';
import FooterPolygonSVG from './FooterPolygon.svg';
import LogoSVG from '../MenuComponents/Logo.svg';

const FooterPolygon = styled(FooterPolygonSVG)`
  fill: ${props => props.theme.orange};
`;

const RightPolygon = styled(RightPolygonSVG)`
  fill: ${props => props.theme.secondary};
`;

const Logo = styled(LogoSVG)`
  fill: ${props => props.theme.primary};
  position: fixed;
  right: 5px;
  bottom: 0px;
  width: 30%;
`

const Footer = ({ className }) => {
  return (
    <div className={className}>
      <FooterPolygon />
      <RightPolygon />
      <Logo />
    </div>
  );
};

const StyledFooter = styled(Footer)`
  svg {
    position: fixed;
    bottom: 0;
  }

  width: 100%;
  height: 100%;
`;
export default StyledFooter;
