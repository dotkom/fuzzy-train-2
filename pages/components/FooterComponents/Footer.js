import React from 'react';
import styled from 'styled-components';
import RightPolygonSVG from './RightFooter.svg';
import FooterPolygonSVG from './FooterPolygon.svg';
import LogoSVG from '../MenuComponents/Logo.svg';

const FooterPolygon = styled(FooterPolygonSVG)`
  fill: ${props => props.theme.orange};
  position: absolute;
  z-index: 0;
  bottom: 0;
`;

const RightPolygon = styled(RightPolygonSVG)`
  fill: ${props => props.theme.secondary};
  position: absolute;
  z-index: 1;
  bottom: 0;
`;

const Logo = styled(LogoSVG)`
  fill: ${props => props.theme.primary};
  position: absolute;
`;

const Footer = ({ className }) => {
  return (
    <div className={className}>
      <FooterPolygon />
      <RightPolygon />
    </div>
  );
};

const StyledFooter = styled(Footer)`
  width: 100%;
`;
export default StyledFooter;
