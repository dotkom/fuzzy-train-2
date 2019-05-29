const darkTheme = {
  primary: '#07244C',
  secondary: '#ffffff',
};

const lightTheme = {
  primary: '#ffffff',
  secondary: '#07244C',
};

const getTheme = themeString => {
  return themeString == 'dark' ? darkTheme : lightTheme;
};

const getDefaultTheme = () => {
  const hourNow = new Date().getHours();
  const defaultTheme = hourNow <= 8 || hourNow >= 20 ? 'dark' : 'light';
  return getTheme(defaultTheme);
};

export { getDefaultTheme, getTheme};
