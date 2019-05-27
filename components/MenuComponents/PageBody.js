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
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px 30px;
  box-sizing: border-box;
`;

export default PageBody;
