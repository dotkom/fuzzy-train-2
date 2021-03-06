import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../GlobalStyle';
import Footer from '../FooterComponents/Footer';
import Title from './Title';
import { useTheme, ThemeToggleProvider } from '../ThemeComponents/ThemeContext';
import { getTheme } from '../ThemeComponents/ThemeColorschemes';

const PageBody = ({ children, title }) => {
  const themeState = useTheme();
  return (
    <ThemeToggleProvider>
      <GlobalStyle theme={getTheme(themeState.theme)} />
      <Title text={title} />
      <PageBodyContainer>{children}</PageBodyContainer>
      <Footer theme={themeState.theme} />
    </ThemeToggleProvider>
  );
};

const PageBodyContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px 30px;
  box-sizing: border-box;
`;

export default PageBody;
