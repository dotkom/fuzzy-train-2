import React from "react";
import Homepage from "./homepage/Homepage";
import { createGlobalStyle, ThemeProvider } from "styled-components";
//import { darkTheme, lightTheme } from './colorscheme';

const GlobalStyle = createGlobalStyle`
:root {
  --primary: #07244C;
  --secondary: #ffffff;
  
  @media (prefers-color-scheme: light) {
    --primary: #ffffff;
    --secondary: #07244C;
  }
}
body {
  background-color: var(--primary);
  transition-property: background-color;
  transition-duration: 300ms;
}

`;

const Index = () => {
  return (
    <>
      <GlobalStyle />
      <Homepage />
    </>
  );
};

export default Index;
