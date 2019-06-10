import React, { useState } from 'react';
import styled from 'styled-components';
import InputField from 'components/FormComponents/InputField';
import CheckboxArea from 'components/FormComponents/CheckboxArea';
import TextArea from 'components/FormComponents/TextArea';
import Label from 'components/FormComponents/Label';
import PageBody from 'components/MenuComponents/PageBody';
import Tabs from './Tabs';
import Markdown from 'components/Markdown';

const DualInputFieldWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 30px;
`;

const SubmitButton = styled.input`
  color: var(--secondary);
  font-size: 25px;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: var(--primary);
  border-color: var(--secondary);
  padding: 15px;
  align-self: flex-end;
  transition-duration: 250ms;
  transition-property: background-color;
  :hover {
    background-color: gray;
  }
  :placeholder  {
    color: var(--grey);
  }
`;

const HeaderSource = `
  # Meld interesse:
`;

const ReportInterestContainer = ({ className }) => {
  const [inputs, setInputs] = useState({});

  const handleInputChange = event => {
    const target = event.target;
    const value = target.type == 'checkbox' ? target.checked : target.value;
    setInputs({ ...inputs, [target.name]: value });
    console.log(inputs);
  };

  const handleSubmit = event => {
    event.preventDefault();
    alert('Din interesse er nå meldt');
    // TODO: Find out what to do with the state on submit, maybe reset all fields idk? :))
  };

  return (
    <PageBody title="for bedrifter">
      <Tabs />
      <form className={className} onSubmit={handleSubmit}>
        <Markdown source={HeaderSource} />
        <InputField
          type="text"
          text="Bedrift"
          name="company"
          placeholder="Navn på bedriften..."
          required
          onChange={handleInputChange}
        />
        <DualInputFieldWrapper>
          <InputField
            type="text"
            text="Kontaktperson"
            name="contact"
            placeholder="Navn på kontaktperson..."
            required
            onChange={handleInputChange}
          />
          <InputField
            type="email"
            text="E-post"
            name="email"
            placeholder="E-posten det ønskes svar til..."
            required
            onChange={handleInputChange}
          />
        </DualInputFieldWrapper>
        <CheckboxArea inputs={inputs} handleInputChange={handleInputChange} />
        <TextArea
          name="Kommentarer"
          placeholder="Legg gjerne ved noen kommentarer om hva du lurer på, slik at vi lettere kan hjelpe deg!"
        />
        <SubmitButton type="submit" value="Meld interesse" />
      </form>
    </PageBody>
  );
};

const ReportInterest = styled(ReportInterestContainer)`
  display: flex;
  flex-direction: column;
  ${Label} {
    font-size: 24px;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default ReportInterest;
