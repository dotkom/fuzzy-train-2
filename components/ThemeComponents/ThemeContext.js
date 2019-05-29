import React, { useState } from 'react';
import { getTheme } from './ThemeColorschemes';

const ContextData = {
  theme: '',
  toggleTheme: () => {},
};

const ThemeContext = React.createContext(ContextData);
const useTheme = () => React.useContext(ThemeContext);

class ThemeToggleProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = '';
  }

  componentDidMount() {
    this.state =
      getComputedStyle(document.documentElement).getPropertyValue('--primary') == '#ffffff' ? 'light' : 'dark';

  }

  render() {
    const switchTheme = mode => {
      const root = document.documentElement;
      const newMode = mode == 'light' ? 'dark' : 'light';
      const newTheme = getTheme(newMode);
      //adds "--"" in front of the key because the css variable props start with double dash
      for (let k in newTheme) {
        root.style.setProperty('--' + k, newTheme[k]);
      }

      this.state = newMode;
    };

    return (
      <ThemeContext.Provider
        value={{
          theme: this.state,
          toggleTheme: () => switchTheme(this.state),
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export { ThemeToggleProvider, useTheme, ThemeContext };
