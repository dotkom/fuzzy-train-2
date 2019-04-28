import React from "react";
import { createGlobalStyle } from "styled-components";
import MeldInteresse from "./meldInteresse.js";

//Temporary file for å teste routing
const GlobalStyle = createGlobalStyle`
body {
  background-color: #07244C;
  font-family: 'SoHeiheiurce Sans Pro', 'sans-serif';
  color: #ffffff;
}
`;
const Bedrifter = () => {
  return (
    <div>
      <GlobalStyle />
      <MeldInteresse />
    </div>
  );
};

export default Bedrifter;
