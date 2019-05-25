import React from 'react';
import { css } from 'styled-components';
import styled from 'styled-components';
import Link from 'next/link';

const MenuTabContainer = ({ className, link, text, browserUrl }) => {
  return (
    <Link href={link} >
      <a className={className}>{text}</a>
    </Link>
  );
};

const MenuTab = styled(MenuTabContainer)`
  text-decoration: none;
  text-align: center;
  color: ${props => props.theme.secondary};
  opacity: ${props => (props.isActive ? 1 : 0.7)};
`;
export default MenuTab;
