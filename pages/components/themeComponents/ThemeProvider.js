import { ThemeProvider as ModuleThemeProvider } from 'styled-components';
import { getThemeHooks } from './ThemeHook'
import React from 'react';
import getTheme from './ThemeColorschemes'

const defaultContextData = {
  currentTheme: '',
  toggleTheme: () => { }
}

const ThemeContext = React.createContext(defaultContextData);
const currentThemeState = () => React.useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = getThemeHooks();

  // returns nothing if the theme hasnt been set.
  // This makes sure we avoid e.g starting in lightmode and switching to dark when we get themeState
  if (!themeState.hasThemeMounted) {
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

export { currentThemeState, ThemeProvider }