import React from 'react';
import styled from 'styled-components';

const Input = styled.input``;

const Wrapper = styled.div`
  display: flex;
`;

const StyledLabel = styled.label`
  color: ${props => props.theme.secondary};
`;

const Checkbox = ({ className, name, value, key, title }) => {
  return (
    <Wrapper title={title}>
      <Input className={className} name={name} type={'checkbox'} value={value} id={value} key={key} />
      <StyledLabel htmlFor={value}>{value}</StyledLabel>
    </Wrapper>
  );
};

export default Checkbox;
