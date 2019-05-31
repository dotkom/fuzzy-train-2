import React from 'react';
import styled from 'styled-components';
import Checkbox from './Checkbox';
import Label from './Label';

const CheckboxFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 0px;
`;

const CheckboxText = styled.span`
  color: var(--secondary);
`;

const CheckboxField = props => {
  const [checked, setChecked] = React.useState(false);

  const handleCheckboxChange = event => setChecked(event.target.checked);

  return (
    <CheckboxFieldWrapper className={props.className}>
      <label htmlFor={props.name}>
        <Checkbox checked={checked} onChange={handleCheckboxChange} {...props} />
        <CheckboxText>{props.text}</CheckboxText>
      </label>
    </CheckboxFieldWrapper>
  );
};

export default CheckboxField;
