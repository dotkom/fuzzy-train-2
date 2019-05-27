import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../GlobalStyle';
import { ThemeProvider, useTheme } from '../ThemeComponents/ThemeProvider';
import Footer from '../FooterComponents/Footer';
import Title from './Title';

//Temporary file for å teste routing
const PageBody = ({ children, className, title }) => {
  return (
    <>
      <ThemeProvider className={className}>
        <GlobalStyle />
        <Title text={title} />
        <PageBodyContainer>{children}</PageBodyContainer>
      </ThemeProvider>
      <Footer />
    </>
  );
};

const PageBodyContainer = styled.div`
  width: 100%;
`;

export default PageBody;
