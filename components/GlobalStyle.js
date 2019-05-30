import { createGlobalStyle } from 'styled-components';
import { colors, darkTheme, lightTheme } from './ThemeComponents/ThemeColorschemes';

const GlobalStyle = createGlobalStyle`

  :root {
    /* primary and secondary is set by default theme based on the time of the day*/
    --primary: ${props => props.theme.primary};
    --secondary: ${props => props.theme.secondary};
    --orange: ${colors.orange};
    --grey: ${colors.grey};

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
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }
`;

export default GlobalStyle;
