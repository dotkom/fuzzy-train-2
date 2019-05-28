import React from 'react';
import styled from 'styled-components';
import FooterSVG from './Footer.svg'
import LogoSVG from '../MenuComponents/Logo.svg';

const Logo = styled(LogoSVG)`
  position: absolute;
  right: 20px;
  bottom: 20px;
  width: 40vmin;
  fill: ${props => props.theme.primary};
`;

const Container = styled.div`
  width: 100%;
  height: 300px;
`;

const RightDiv = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100vmin;
  height: 30vmin;
  transform: rotate(20deg) translate(-5%, 60%);
  background: #dc942d;
`;

const LeftDiv = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 125%;
  height: 25vmin;
  transform: rotate(-5deg) translate(10%, 45%);
  background: ${props => props.theme.secondary};
`;

const Footer = () => {
  return (
    <Container>
      <FooterSVG/>
    </Container>
  );
};

export default Footer;
