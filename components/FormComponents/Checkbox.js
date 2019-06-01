import React from 'react';
import styled, { css } from 'styled-components';
import Label from './Label';

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  height: 16px;
  margin: -1px;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 16px;
`;

const Icon = styled.svg`
  fill: none;
  stroke: var(--orange);
  stroke-width: 3px;
`;
const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: var(--white);
  border: 1px solid var(--blue);
  box-sizing: border-box;
  border-radius: 5px;
  transition: all 150ms;

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
  ${HiddenCheckbox}:hover+ & {
    ${Icon} {
      visibility: visible;
      stroke: ${props => (!props.checked ? 'var(--grey)' : '')};
    }
  }
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  padding-right: 10px;
`;

const Checkbox = ({ className, checked, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);

export default Checkbox;
