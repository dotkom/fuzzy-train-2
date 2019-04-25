import React, { useState } from 'react';
import preferedTheme from '../index';
import Index from '../index'



class SwitchTheme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: false,
    };
  };

  async componentDidMount() {
    this.setState({
      isDark: getComputedStyle(document.documentElement).getPropertyValue('--primary') == "#07244C" ? true : false
    })
  }

  render() {
    const switchToDarkMode = () => {
      const root = document.documentElement;
      const darkTheme= {
        '--primary': '#07244C',
        '--secondary': '#ffffff'
      }
      for (let k in darkTheme) {
        root.style.setProperty(k, darkTheme[k])
      }
      this.setState({isDark: true})
    }

    const switchToLightMode = () => {
      const root = document.documentElement;
      const lightTheme = {
        '--primary': '#ffffff',
        '--secondary': '#07244C'
      }
      for (let k in lightTheme) {
        root.style.setProperty(k, lightTheme[k]);
      }
      this.setState({isDark:false})
    }

    return (
      <div onClick={() => this.state.isDark? switchToLightMode() : switchToDarkMode()}>
        {this.props.children}
      </div>
    );
  }

}

export default SwitchTheme;