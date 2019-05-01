import React from "react";
import { createGlobalStyle } from "styled-components";
import MeldInteresse from "./meldInteresse.js";
import { ThemeProvider } from "./components/themeComponents/ThemeProvider.js";

//Temporary file for å teste routing
const GlobalStyle = createGlobalStyle`
body {
  background-color: ${props => props.theme.primary};
  font-family: 'Source Sans Pro', 'sans-serif';
  color: #ffffff;
}

`;
const Bedrifter = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <MeldInteresse />
    </ThemeProvider>

  );
};

export default Bedrifter;
