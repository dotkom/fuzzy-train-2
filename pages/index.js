import React from "react";
import Homepage from "./homepage/Homepage";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --primary: #07244C;

  @media (prefers-color-scheme: light) {
      --primary: #ffffff;
  }
}
body{
  background-color: var(--primary);
}

`;

const Index = () => (
  <>
    <GlobalStyle />
    <Homepage />
  </>
);

export default Index;
