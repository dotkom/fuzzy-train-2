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

const InputFieldContainer = props => {
  return (
    <div className={props.className}>
      <Label htmlFor={props.name} isRequired={props.required}>
        {props.text}
      </Label>
      <Input type="text" {...props} />
    </div>
  );
};

const InputField = styled(InputFieldContainer)`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export default InputField;
