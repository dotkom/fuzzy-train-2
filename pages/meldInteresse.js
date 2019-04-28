import React from "react";
import styled from "styled-components";
import InputField from "./components/InputField.js";

const HeaderStyling = styled.span`
  color: #faa21b;
  font-size: 30px;
`;

const BorderOfForm = styled.div`
  border-style: solid none none none;
  border-color: grey;
  border-width: 1.5px;
  display: flex;
  flex-direction: column;
`;

const MeldInteresse = ({ className }) => {
  return (
    <form className={className} action="POST">
      <legend>
        <HeaderStyling>Meld interesse:</HeaderStyling>
        <BorderOfForm>
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
        </BorderOfForm>
      </legend>
    </form>
  );
};

const MeldInteresseStyle = styled(MeldInteresse)`
  display: flex;
`;

export default MeldInteresseStyle;
