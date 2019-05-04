import React from 'react';
import styled, { css } from 'styled-components';

const Label = styled.label`
  font-size: 36px;
  color: ${props => props.theme.secondary};
  ${props =>
    props.isRequired &&
    css`
      &:after {
        content: ' *';
        color: ${props => props.theme.orange};
      }
    `}
`;

const Input = styled.input`
  color: ${props => props.theme.secondary};
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: ${props => props.theme.primary};
  padding: 7px;
  ::-webkit-input-placeholder {
    font-size: 24px;
  }
`;

const InputField = ({ className, type, name, placeholder, label, required }) => {
  return (
    <div className={className}>
      <Label htmlFor={name} isRequired={required}>
        {label}
      </Label>
      <Input type={type} name={name} placeholder={placeholder} required={required} />
    </div>
  );
};

const StyledInputField = styled(InputField)`
  display: flex;
  flex-direction: column;
`;

export default StyledInputField;
