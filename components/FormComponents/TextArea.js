import styled from 'styled-components';
import React from 'react';
import Label from './Label';

const TextArea = styled.textarea`
  background-color: var(--white);
  font-size: 14px;
  resize: none;
  border: 2px solid var(--blue);
  box-sizing: border-box;
  border-radius: 5px;
  padding: 20px 10px 50px 10px;
  :invalid {
    box-shadow: none;
  }
  margin-bottom: 30px;
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
