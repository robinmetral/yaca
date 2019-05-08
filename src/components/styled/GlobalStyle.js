import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /*
  @font-face {
    font-family: "Font name";
    src: url("/path/to/font.woff2") format("woff2");
    font-weight: normal;
    font-style: normal;
  }
  */
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *,
  *:before,
  *after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    /*font-family: "Font name";*/
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
