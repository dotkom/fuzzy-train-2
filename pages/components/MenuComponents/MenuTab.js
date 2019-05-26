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
  color: ${props => props.theme.secondary};
  opacity: ${props => (props.router.pathname == props.link ? 1 : 0.7)};
  font-weight: 900;
  font-size: 0.75rem;
  line-height: 1.5rem;

  @media only screen and (max-width: 768px) {
    font-size: 0.75rem;
  }

  ${props =>
    props.underline &&
    css`
      border-bottom: ${props.router.pathname == props.link ? `3px solid ${props.theme.orange}` : '2px solid #c4c4c4'};
    `}
`;

export default withRouter(MenuTab);
