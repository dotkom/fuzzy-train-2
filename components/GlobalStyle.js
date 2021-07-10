import { createGlobalStyle } from 'styled-components';
import { colors, darkTheme, lightTheme } from './ThemeComponents/ThemeColorschemes';

const GlobalStyle = createGlobalStyle`

  :root {
    /* primary and secondary is set by default theme based on the time of the day*/
    --primary: ${props => props.theme.primary};
    --secondary: ${props => props.theme.secondary};
    --orange: ${colors.orange};
    --grey: ${colors.grey};
    --blue: ${colors.blue};
    --white: ${colors.white};

    @media (prefers-color-scheme: dark) {
      --primary: ${darkTheme.primary};
      --secondary: ${darkTheme.secondary};
    }

    @media (prefers-color-scheme: light) {
      --primary: ${lightTheme.primary};
      --secondary: ${lightTheme.secondary};
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
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 100%;
  }
`;

export default GlobalStyle;
