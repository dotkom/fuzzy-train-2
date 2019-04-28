import React from "react";
import styled from "styled-components";

const Label = styled.label`
  font-size: 36px;
  color: ${props => props.theme.secondary};
  ::after {
    content: " *";
    color: #faa21b;
  }
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

const InputField = ({ className, type, name, placeholder, label }) => {
  return (
    <div className={className}>
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} name={name} placeholder={placeholder} required />
    </div>
  );
};

const StyledInputField = styled(InputField)`
  display: flex;
  flex-direction: column;
`;

export default StyledInputField;
