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
  text-decoration: none;
  text-align: center;
  color: ${props => props.theme.secondary};
  opacity: ${props => (props.isActive ? 1 : 0.7)};
  font-weight: 900;
  font-size: 1.5rem;
  line-height: 2em;

  @media only screen and (max-width: 768px) {
    font-size: 1.5em;
  }

  ${props =>
    props.underline &&
    css`
      border-bottom: ${props.isActive ? '3px' : '2px'} solid;
      border-bottom-color: ${props.isActive ? props.theme.orange : '#c4c4c4'};
    `}
`;

const SubMenuTab = styled(MenuTabContainer)` 

`

export default MenuTab;
