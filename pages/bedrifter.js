import React from 'react';
import { createGlobalStyle } from 'styled-components'


//Temporary file for å teste routing
const GlobalStyle = createGlobalStyle`
body {
  background-color: #07244C;
  font-family: 'SoHeiheiurce Sans Pro', 'sans-serif';
  color: #ffffff;
}
`
const Bedrifter = () => {
  return (
    <div>
      <GlobalStyle />
      <div><p>HEIHEI</p></div>
    </div>
  );
};

export default Bedrifter;
