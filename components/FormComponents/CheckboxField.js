import React from 'react';
import styled from 'styled-components';
import Checkbox from './Checkbox';

const CheckboxFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 0px;
`;

const CheckboxText = styled.span`
  color: var(--secondary);
`;

const CheckboxField = props => {
  return (
    <CheckboxFieldWrapper className={props.className}>
      <label htmlFor={props.name}>
        <Checkbox checked={props.checked} {...props} />
        <CheckboxText>{props.text}</CheckboxText>
      </label>
    </CheckboxFieldWrapper>
  );
};

export default CheckboxField;
