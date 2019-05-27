import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const ReturnArrow = ({ className }) => {
  return (
    <Link href="/">
      <svg className={className} width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="50" />
        <path d="M17 51L41 31.9474V70.0526L17 51Z" />
        <rect x="40" y="48" width="45" height="10" />
      </svg>
    </Link>
  );
};

const StyledArrow = styled(ReturnArrow)`
  circle {
    fill: ${props => props.theme.orange};
  }
  path,
  rect {
    fill: ${props => props.theme.primary};
  }
`;

export default StyledArrow;
