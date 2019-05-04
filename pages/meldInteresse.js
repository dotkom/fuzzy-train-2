import React from 'react';
import styled from 'styled-components';
import InputField from './components/InputField.js';
import Checkbox from './Checkbox.js';
import CirclesTest from './homepage/assets/Circles';

const Circles = styled(CirclesTest)`
  position: fixed;
  left: 80%;
`;

const HeaderStyling = styled.span`
  color: #faa21b;
  font-size: 48px;
  font-weight: 900;
`;

const FormWrapper = styled.div`
  border-style: solid none none none;
  border-color: grey;
  border-width: 1.5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60%;
`;

const StyledLabel = styled.label`
  font-size: 36px;
  color: ${props => props.theme.secondary};
`;

const StyledLabelHeader = styled(StyledLabel)`
  ::after {
    content: ' *';
    color: #faa21b;
  }
`;

const CheckboxWrapper = styled.div`
  display: grid;
  font-size: 28px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-flow: row;
  grid-column-gap: 30px;
  border: 0.5px solid #c4c4c4;
  padding: 7px;
  border-radius: 10px;
`;

const StyledTextarea = styled.textarea`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.secondary};
  font-size: 16px;
  resize: none;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 5px;
  :invalid {
    box-shadow: none;
  }
`;

const TextareaDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledSubmitButton = styled.input`
  color: ${props => props.theme.secondary};
  font-size: 25px;
  border-radius: 15px;
  width: 15%;
  background-color: ${props => props.theme.primary};
  border-color: ${props => props.theme.secondary};
  padding: 15px;
  align-self: flex-end;
  transition-duration: 250ms;
  transition-property: background-color;
  :hover {
    background-color: gray;
  }
`;

const InfoLabel = styled.label`
  font-size: 15px;
`;

const MeldInteresse = ({ className }) => {
  const checkboxList = [
    { text: 'ITEX', textOnHover: 'IT-eksursjonen' },
    { text: 'Bedriftspresentasjon', textOnHover: 'bedpress' },
    { text: 'Kurs / faglig arrengement', textOnHover: 'kurs' },
    { text: 'Annonse i Offline', textOnHover: 'reklame' },
    { text: 'Artikkel i Offline', textOnHover: 'artikkel' },
    { text: 'Techtalks', textOnHover: 'Tekniske taler' },
    { text: 'Lorem Ipsum', textOnHover: 'Ipsum Lorem' },
    { text: 'Karrieremuligheter', textOnHover: 'Jobb' },
    { text: 'foobar', textOnHover: 'foo' },
  ];

  return (
    <>
      <form className={className} action="POST" id="meldInteresseForm">
        <HeaderStyling>Meld interesse:</HeaderStyling>
        <FormWrapper>
          <InfoLabel>Felt merket med en gul stjerne er nødvendige at du fyller ut</InfoLabel>
          <InputField label="Bedrift" type="text" name="Bedrift" placeholder="Navn på bedriften..." required/>
          <InputField label="Kontaktperson" type="text" name="Kontaktperson" placeholder="Navn på kontaktperson..." required/>
          <InputField label="E-post" type="email" name="Epost" placeholder="E-posten det ønskes svar til..." required/>
          <StyledLabel>Huk av det du er interessert i</StyledLabel>
          <InfoLabel>Du kan holde musepekeren over de forskjellige feltene for mer informasjon</InfoLabel>
          <CheckboxWrapper>
            {checkboxList.map((el, i) => (
              <Checkbox name={'Interests'} value={el.text} key={i} title={el.textOnHover} />
            ))}
          </CheckboxWrapper>
          <TextareaDiv>
            <StyledLabelHeader htmlFor="bedriftKommentar">Kommentarer</StyledLabelHeader>
            <StyledTextarea
              id="bedriftKommentar"
              name="bedriftKommentar"
              placeholder="Utdypning av ønsker og hvordan de tenkes gjennomført..."
              required
            />
          </TextareaDiv>
          <StyledSubmitButton type="submit" value="Send inn" />
        </FormWrapper>
      </form>
      <Circles />
    </>
  );
};

const MeldInteresseStyle = styled(MeldInteresse)`
  display: flex;
  flex-direction: column;
  width: 80rem;
  height: 70rem;
`;

export default MeldInteresseStyle;
