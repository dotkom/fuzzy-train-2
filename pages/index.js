import React from 'react';
import Homepage from './homepage/Homepage';
import styled,{ createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
    --dark: #07244C;
}
    body{
        background-color: var(--dark);
    }

`

const Index = () => (
    <>
    <GlobalStyle/>
    <Homepage/>
    </>
);

export default Index;