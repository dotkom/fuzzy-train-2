import React from 'react';
import Homepage from './homepage/Homepage';
import styled, { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from './components/themeComponents/ThemeProvider';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
  }

  body {
    background-color: ${props => props.theme.primary};
    font-family: 'Source Sans Pro', sans-serif;
    transition-property: background-color;
    transition-duration: 300ms;
    margin: 0;
    padding: 0;
  }

  #__next {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
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
