import React from 'react';
import styled from 'styled-components';

const Input = styled.input``;

const Wrapper = styled.div`
  display: flex;
`;

const CheckboxLabel = styled.label`
  color: ${props => props.theme.secondary};
  font-size: 16px;
`;

const Checkbox = ({ className, name, value, key, title }) => {
  return (
    <Wrapper title={title}>
      <Input className={className} name={name} type={'checkbox'} value={value} id={value} key={key} />
      <CheckboxLabel htmlFor={value}>{value}</CheckboxLabel>
    </Wrapper>
  );
};

export default Checkbox;
