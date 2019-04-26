import React from 'react';
import { css } from 'styled-components';
import styled from 'styled-components';
import Link from 'next/link'

const MenuTabContainer = ({ className, link, text }) => {
  return (
    <Link href={link} >
      <a className={className}>{text}</a>
    </Link>
  );
};

const MenuTab = styled(MenuTabContainer)`
  font-style: normal;
  font-weight: 900;
  font-size: 3vmin;
  text-decoration: none;
  text-align: center;
  line-height: 68px;
  width: 20vw;
  
  border-bottom: 3px solid #c4c4c4;
  opacity: 0.7;
  color: ${props => props.theme.secondary};

  ${props => props.isActive && css`
    border-bottom: 3px solid #dc942d;
    opacity: 1;
  `}
`
export default MenuTab;