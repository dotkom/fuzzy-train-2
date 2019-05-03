import React from 'react';
import { css } from 'styled-components';
import styled from 'styled-components';
import Link from 'next/link';

const MenuTab = ({ className, link, text }) => {
  return (
    <Link href={link}>
      <a className={className}>{text}</a>
    </Link>
  );
};

const StyledMenuTab = styled(MenuTab)`
  font-style: normal;
  font-weight: 900;
  font-size: 1.5rem;
  line-height: 2em;
  text-decoration: none;
  text-align: center;
  color: ${props => props.theme.secondary};

  @media only screen and (max-width: 768px) {
    font-size: 1.5em;
  }
  opacity: ${props => (props.isActive ? 1 : 0.7)};

  ${props =>
    props.underline &&
    css`
      border-bottom: ${props.isActive ? '3px' : '2px'} solid;
      border-bottom-color: ${props => (props.isActive ? props.theme.orange : '#c4c4c4')};
    `}
`;
export default StyledMenuTab;
