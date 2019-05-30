export const colors = {
  orange: '#faa21b',
  grey: '#c4c4c4',
  blue: '#07244c',
  white: '#ffffff',
};

export const darkTheme = {
  primary: colors.blue,
  secondary: colors.white,
};

export const lightTheme = {
  primary: colors.white,
  secondary: colors.blue,
};

export const getTheme = themeString => {
  return themeString == 'dark' ? darkTheme : lightTheme;
};

export const getDefaultTheme = () => {
  const hourNow = new Date().getHours();
  const defaultTheme = hourNow <= 8 || hourNow >= 20 ? 'dark' : 'light';
  return getTheme(defaultTheme);
};
