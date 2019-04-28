import React from "react";
import styled from "styled-components";

const Label = styled.label`
  font-size: 36px;
  ::after {
    content: " *";
    color: #faa21b;
  }
`;

const Input = styled.input``;

const InputField = ({ className, type, name, placeholder, label }) => {
  return (
    <div className={className}>
      <Label>{label}</Label>
      <Input type={type} name={name} placeholder={placeholder} required />
    </div>
  );
};

const StyledInputField = styled(InputField)`
  display: flex;
  flex-direction: column;
`;

export default StyledInputField;
