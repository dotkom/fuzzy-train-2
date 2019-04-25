import React from "react";
import Homepage from "./homepage/Homepage";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "./components/themeComponents/ThemeProvider"

const GlobalStyle = createGlobalStyle`
body {
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.primary};
  transition-property: background-color;
  transition-duration: 300ms;
}

html {
  width: 100%;
  height: 100%;
}
`;

const Index = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Homepage />
    </ThemeProvider>
  );
};

export default Index;
