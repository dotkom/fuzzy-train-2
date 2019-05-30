import React from 'react';
import { css } from 'styled-components';
import styled from 'styled-components';
import { withRouter } from 'next/router';

const MenuTabContainer = ({ children, router, link, className }) => {
  const handleClick = e => {
    e.preventDefault();
    router.push(link);
  };

  return (
    <a href={link} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

const MenuTab = styled(MenuTabContainer)`
  text-decoration: none;
  text-align: center;
  color: var(--secondary);
  opacity: ${props => (props.router.pathname == props.link ? 1 : 0.7)};
  font-weight: 900;
  font-size: 1.5rem;
  padding-bottom: 16px;

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }

  ${props =>
    props.underline &&
    css`
      border-bottom: ${props.router.pathname == props.link ? `3px solid var(--orange)` : '2px solid var(--grey)'};
    `}
`;

export default withRouter(MenuTab);
