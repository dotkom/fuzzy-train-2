import React from "react";
import { createGlobalStyle } from "styled-components";
import MeldInteresse from "./meldInteresse.js";
import { ThemeProvider } from "./components/themeComponents/ThemeProvider.js";
import styled from "styled-components";

const Input = styled.input``;

const Wrapper = styled.div`
  display: flex;
`;

const StyledLabel = styled.label`
  color: ${props => props.theme.secondary};
`;

const Checkbox = ({ className, name, value }) => {
  return (
    <Wrapper>
      <Input
        className={className}
        name={name}
        type={"checkbox"}
        value={value}
        id={value}
      />
      <StyledLabel htmlFor={value}>{value}</StyledLabel>
    </Wrapper>
  );
};

export default Checkbox;
