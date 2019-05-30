import React from 'react';
import styled from 'styled-components';
import Label from './Label';

const Input = styled.input`
  color: var(--secondary);
  border: 2px solid var(--secondary);
  box-sizing: border-box;
  border-radius: 5px;
  background-color: var(--primary);
  padding: 12px;
  ::-webkit-input-placeholder {
    font-size: 24px;
  }
`;

const InputField = ({ className, type, name, placeholder, required }) => {
  return (
    <div className={className}>
      <Label htmlFor={name} isRequired={required}>
        {name}
      </Label>
      <Input type={type} name={name} placeholder={placeholder} required={required} />
    </div>
  );
};

const StyledInputField = styled(InputField)`
  display: flex;
  flex-direction: column;
  margin: 2px;
`;

export default StyledInputField;
