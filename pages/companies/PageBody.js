import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../components/GlobalStyle';
import { ThemeProvider, useTheme } from '../components/ThemeComponents/ThemeProvider';
import Footer from '../components/FooterComponents/Footer';
import Title from '../components/MenuComponents/Title';

//Temporary file for å teste routing
const PageBody = ({ children, className }) => {
  return (
    <ThemeProvider className={className}>
      <GlobalStyle />
      <Title text="for bedrifter" />
      <PageBodyContainer>{children}</PageBodyContainer>
      <Footer />
    </ThemeProvider>
  );
};

const PageBodyContainer = styled.div`
  width: 60%;
`;

export default PageBody;
