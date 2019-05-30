import React from 'react';
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
    this.state = {
      theme: '',
    };
  }

  componentDidMount() {
    this.setState({
      theme: getComputedStyle(document.documentElement).getPropertyValue('--primary') == '#ffffff' ? 'light' : 'dark',
    });
  }

  toggleTheme = () => {
    
    const root = document.documentElement;
    const newMode = this.state.theme == 'light' ? 'dark' : 'light';
    const newTheme = getTheme(newMode);
    //adds "--"" in front of the key because the css variable props start with double dash
    for (let k in newTheme) {
      root.style.setProperty('--' + k, newTheme[k]);
    }

    this.setState({ theme: newMode });
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state,
          toggleTheme: this.toggleTheme,
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export { ThemeToggleProvider, useTheme, ThemeContext };
