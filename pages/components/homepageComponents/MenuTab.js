import React from 'react';
import { css } from 'styled-components';
import styled from 'styled-components';
import Link from 'next/link';

const MenuTabContainer = ({ className, link, text }) => {
  return (
    <Link href={link}>
      <a className={className}>{text}</a>
    </Link>
  );
};

const MenuTab = styled(MenuTabContainer)`
  font-style: normal;
  font-weight: 900;
  font-size: 1.5em;
  line-height: 2em;
  text-decoration: none;
  text-align: center;

  @media only screen and (max-width: 1024px) {
    font-size: 2.25vw;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.5em;
  }
  border-bottom: 3px solid #c4c4c4;
  opacity: 0.7;
  color: ${props => props.theme.secondary};
  ${props =>
    props.isActive &&
    css`
      border-bottom: 3px solid #dc942d;
      opacity: 1;
    `}
`;
export default MenuTab;
