import { ThemeProvider as ModuleThemeProvider } from 'styled-components';
import React from 'react';
import getTheme from './ThemeColorschemes'

const defaultContextData = {
  currentTheme: '',
  toggleTheme: () => { }
}

const ThemeContext = React.createContext(defaultContextData);
const useTheme = () => React.useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = React.useState({
    currentTheme: '',
    hasThemeLoaded: false
  });

  //useEffect makes it possible to get information from window. Works quite similiar to didComponentsMount() for class react components
  React.useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches

    const preferedTheme = () => {
      if (!prefersDark && !prefersLight) {
        const hourNow = new Date().getHours()
        return hourNow < 8 || hourNow > 20 ? 'dark' : 'light';
      }
      else {
        return prefersDark ? 'dark' : 'light';
      }
    };

    setThemeState({ ...themeState, currentTheme: preferedTheme(), hasThemeLoaded: true });
  }, [])

  // returns nothing if the theme hasnt been set.
  // This makes sure we avoid e.g starting in lightmode and switching to dark when we get themeState
  if (!themeState.hasThemeLoaded) {
    return null;
  }

  const toggleTheme = () => {
    const currentTheme = themeState.currentTheme != 'dark' ? 'dark' : 'light';
    setThemeState({ ...themeState, currentTheme });
  }

  return (
    <ModuleThemeProvider theme={getTheme(themeState.currentTheme)}>
      <ThemeContext.Provider
        value={{
          currentTheme: themeState.currentTheme,
          toggleTheme
        }}>
        {children}
      </ThemeContext.Provider>
    </ModuleThemeProvider>
  );
}

export { useTheme , ThemeProvider }