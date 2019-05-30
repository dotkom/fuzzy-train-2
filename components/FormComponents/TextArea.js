import styled from 'styled-components';
import React from 'react';
import Label from './Label';

const TextArea = styled.textarea`
  background-color: var(--primary);
  color: var(--secondary);
  font-size: 16px;
  resize: none;
  border: 1px solid var(--grey);
  box-sizing: border-box;
  border-radius: 5px;
  padding: 5px;
  :invalid {
    box-shadow: none;
  }
`;

const TextAreaContainer = props => {
  const { className, name, required, title, ...textAreaProps } = props;
  return (
    <div className={className}>
      <Label htmlFor={name} isRequired={required}>
        {name}
      </Label>
      <TextArea name={name} required={required} {...textAreaProps} />
    </div>
  );
};

const StyledTextAreaContainter = styled(TextAreaContainer)`
  display: flex;
  flex-direction: column;
`;

export default StyledTextAreaContainter;
