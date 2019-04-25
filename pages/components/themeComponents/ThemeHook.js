import { useState, useEffect } from 'react';

export const getThemeHooks = () => {

  const [themeState, setThemeState] = useState({
    currentTheme: '',
    hasThemeMounted: false
  });

  //useEffect makes it possible to get information from window. Works quite similiar to didComponentsMount() for class react components
  useEffect(() => {
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
    
    setThemeState({ ...themeState, currentTheme: preferedTheme(), hasThemeMounted: true });
  }, [])
  //Empty array at the end makes sure that useEffect() only gets called when ThemeProvider is mounted

  return [themeState, setThemeState]
};