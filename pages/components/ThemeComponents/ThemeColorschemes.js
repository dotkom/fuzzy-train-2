const darkTheme = {
  primary: '#07244C',
  secondary: '#ffffff',
  orange: '#FAA21B'
};

const lightTheme = {
  primary: '#ffffff',
  secondary: '#07244C',
  orange: '#FAA21B',
};

const getTheme = currentTheme => {
  return currentTheme == 'dark' ? darkTheme : lightTheme;
};

export default getTheme;
