import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  :root {
    --primary: ${props => props.defaultTheme.primary};
    --secondary: ${props => props.defaultTheme.secondary};
    --orange: #FAA21B;

    @media (prefers-color-scheme: dark) {
      --primary: #07244C;
      --secondary: #ffffff;
    }

    @media (prefers-color-scheme: light) {
      --primary: #ffffff;
      --secondary: #07244C;
    }
  }


  html,
  body {
    height: 100%;
  }

  body {
    background-color: var(--primary);
    font-family: 'Source Sans Pro', sans-serif;
    transition-property: background-color;
    transition-duration: 300ms;
    margin: 0;
    padding: 0;
  }

  #__next {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }
`;

export default GlobalStyle;
