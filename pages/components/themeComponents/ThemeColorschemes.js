const darkTheme = {
  primary: '#07244C',
  secondary: '#ffffff'
}

const lightTheme = {
  primary: '#ffffff',
  secondary: '#07244C'
}

const getTheme = (currentTheme) => {
  return currentTheme == 'dark' ? lightTheme : darkTheme;
}

export default getTheme