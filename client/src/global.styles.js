import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    font-family: "Open Sans", sans-serif;
    padding: 0 60px;
  }
  
  a {
    text-decoration: none;
    color: black;
  }
`;
