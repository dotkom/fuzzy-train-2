import React from 'react';
import { currentThemeState } from "./ThemeProvider"

const ThemeToggler = ({ children }) => {
    const themeState = currentThemeState();
    return (
        <div onClick={() => themeState.toggleTheme()}> {children}</div>
    )
}

export default ThemeToggler
