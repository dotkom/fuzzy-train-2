import React from 'react';
import styled from 'styled-components';
import Label from './Label';

const Input = styled.input`
  border: 2px solid var(--blue);
  box-sizing: border-box;
  border-radius: 5px;
  background-color: var(--white);
  padding: 12px;

  ::-webkit-input-placeholder {
    font-size: 24px;
    padding: 10px;
  }
`;

const InputFieldContainer = ({ className, type, name, placeholder, required }) => {
  return (
    <div className={className}>
      <Label htmlFor={name} isRequired={required}>
        {name}
      </Label>
      <Input type={type} name={name} placeholder={placeholder} required={required} />
    </div>
  );
};

const InputField = styled(InputFieldContainer)`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export default InputField;
