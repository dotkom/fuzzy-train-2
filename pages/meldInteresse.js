import React from "react";
import styled from "styled-components";
import InputField from "./components/InputField.js";
import Checkbox from "./Checkbox.js";
import CirclesTest from "./homepage/assets/Circles";

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

const CheckboxWrapper = styled.div`
  display: grid;
  font-size: 28px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-flow: row;
  grid-column-gap: 30px;
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

const MeldInteresse = ({ className }) => {
  const checkboxList = [
    "ITEX",
    "Bedriftspresentasjon",
    "Kurs / faglig arrangement",
    "Annonse i Offline",
    "Artikkel i Offline",
    "Techtalks",
    "Annonse i Offline",
    "Artikkel i Offline",
    "Techtalks"
  ];

  return (
    <>
      <form className={className} action="POST">
        <HeaderStyling>Meld interesse:</HeaderStyling>
        <FormWrapper>
          <InputField
            label="Bedrift"
            type="text"
            name="Bedrift"
            placeholder="Navn på bedriften..."
          />
          <InputField
            label="Kontaktperson"
            type="text"
            name="Kontaktperson"
            placeholder="Navn på kontaktperson..."
          />
          <InputField
            label="E-post"
            type="email"
            name="Epost"
            placeholder="E-posten det ønskes svar til..."
          />
          <CheckboxWrapper>
            {checkboxList.map(el => (
              <Checkbox name={"Interests"} value={el} key={el.id} />
            ))}
          </CheckboxWrapper>
          <TextareaDiv>
            <StyledLabel htmlFor="bedriftKommentar">Kommentarer</StyledLabel>
            <StyledTextarea
              id="bedriftKommentar"
              name="bedriftKommentar"
              placeholder="Eventuelle kommentarer..."
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
