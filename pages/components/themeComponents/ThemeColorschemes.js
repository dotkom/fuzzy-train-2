const darkTheme = {
  primary: '#07244C',
  secondary: '#ffffff',
};

const lightTheme = {
  primary: '#ffffff',
  secondary: '#07244C',
};

const getTheme = currentTheme => {
  return currentTheme == 'dark' ? darkTheme : lightTheme;
};

export default getTheme;
