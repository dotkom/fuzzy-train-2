import React from 'react';
import styled from 'styled-components';
import CheckboxField from './CheckboxField';
import Label from './Label'
import { SemesterOptions, EventOptions, ExtraOptions } from './CheckboxOptions';

const AreaContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 50px;
`;

const CategoryContainer = styled.div`
  ${Label} + div {
    margin-top: 30px;
  }
`;

const CheckboxArea = ({ inputs, handleInputChange }) => {
  const Category = ({ options }) => {
    return options.map(props => (
        <CheckboxField
          text={props.text}
          name={props.name}
          checked={inputs[props.name]}
          onChange={handleInputChange}
          key={props.name}
        />
    ));
  };

  return (
    <AreaContainer>
      <CategoryContainer>
        <Label>Semester</Label>
        <Category options={SemesterOptions} />
      </CategoryContainer>
      <CategoryContainer>
        <Label>Arrangementer</Label>
        <Category options={EventOptions} />
      </CategoryContainer>
      <CategoryContainer>
        <Label>Annet</Label>
        <Category options={ExtraOptions} />
      </CategoryContainer>
    </AreaContainer>
  );
};

export default CheckboxArea;
