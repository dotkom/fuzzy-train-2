import { ThemeProvider as ModuleThemeProvider } from 'styled-components';
import React from 'react';
import getTheme from './ThemeColorschemes';

const defaultTheme = () => {
  const hourNow = new Date().getHours();
  return hourNow < 8 || hourNow > 20 ? 'dark' : 'light';
};

const defaultContextData = {
  currentTheme: '',
  toggleTheme: () => {},
};

const ThemeContext = React.createContext(defaultContextData);
const useTheme = () => React.useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = React.useState('');
  const [isLoaded, setLoaded] = React.useState(false);

  //useEffect makes it possible to get information from window. Works quite similiar to didComponentsMount() for class react components
  React.useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

    const preferedTheme = () => {
      if (!prefersDark && !prefersLight) {
        return defaultTheme();
      } else {
        return prefersDark ? 'dark' : 'light';
      }
    };
    setCurrentTheme(preferedTheme());
    setLoaded(true);
  }, []);

  // returns nothing if the theme hasnt been set.
  // This makes sure we avoid e.g starting in lightmode and switching to dark when we get themeState

  const toggleTheme = () => {
    setCurrentTheme(currentTheme != 'dark' ? 'dark' : 'light');
  };

  return (
    <ModuleThemeProvider theme={getTheme(currentTheme)}>
      <ThemeContext.Provider
        value={{
          currentTheme: currentTheme,
          toggleTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </ModuleThemeProvider>
  );
};

export { useTheme, ThemeProvider };
