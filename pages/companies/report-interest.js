import React from 'react';
import styled from 'styled-components';
import InputField from 'components/FormComponents/InputField';
import CheckboxField from 'components/FormComponents/CheckboxField';
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

const CheckboxArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 50px;
`;

const CategoryContainer = styled.div`
  ${Label} + div {
    margin-top: 30px;
  }
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
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;

  return (
    <PageBody title="for bedrifter">
      <Tabs />
      <form className={className} action="POST" id="meldInteresseForm">
        <Markdown source={HeaderSource} />
        <InputField type="text" name="Bedrift" placeholder="Navn på bedriften..." required />
        <DualInputFieldWrapper>
          <InputField type="text" name="Kontaktperson" placeholder="Navn på kontaktperson..." required />
          <InputField type="email" name="E-post" placeholder="E-posten det ønskes svar til..." required />
        </DualInputFieldWrapper>
        <CheckboxArea>
          <CategoryContainer>
            <Label>Semester</Label>
            <CheckboxField text={'Høst ' + currentYear} name={'h' + currentYear} id={'h' + currentYear} />
            <CheckboxField text={'Vår ' + nextYear} name={'v' + nextYear} id={'v' + nextYear} />
            <CheckboxField text={'Høst ' + nextYear} name={'h' + nextYear} id={'h' + nextYear} />
          </CategoryContainer>
          <CategoryContainer>
            <Label>Arrangementer</Label>
            <CheckboxField text="IT-ekskursjon (ITEX)" name="itex" id="itex" />
            <CheckboxField text="Bedriftpresentasjon" name="bedpress" id="bedpress" />
            <CheckboxField text="Faglig Arrangement/kurs" nane="kurs" id="kurs" />
            <CheckboxField text="Techtalks" name="techtalk" id="techtalk" />
            <CheckboxField text="Alternativ Arrangement" name="alternativ" id="alternativ" />
          </CategoryContainer>
          <CategoryContainer>
            <Label>Annet</Label>
            <CheckboxField text="Annonse i linjeforeningsbladet Offline" name="itex" id="itex" />
            <CheckboxField text="Samarbeid med andre linjeforeninger" name="bedpress" id="bedpress" />
            <CheckboxField text="Jobbannonse på nettsiden" nane="kurs" id="kurs" />
            <CheckboxField text="Profilering for startups" name="itex" id="itex" />
            <CheckboxField text="Annet (spesifiser i kommentarfeltet)" name="techtalk" id="techtalk" />
          </CategoryContainer>
        </CheckboxArea>
        <TextArea
          id="bedriftKommentar"
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
