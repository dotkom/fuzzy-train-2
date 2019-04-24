import React from 'react';
import Circle from './Circle'
import styled from  'styled-components'


const Homepage = () => (
  <div className="Frontpage">
  <StyledCircle/>
  <Circle />
  </div>
  );

const StyledCircle = styled(Circle)`
  fill: ${props => props.dark ? "#07244C": "white"};
`;

export default Homepage