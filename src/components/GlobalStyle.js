import { createGlobalStyle } from "styled-components";
import PublicSans from "../assets/PublicSans-Roman-VF.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Public Sans";
    src: url(${PublicSans}) format("truetype");
  }
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
    font-size: 1.6rem;
    font-variation-settings: 'wght' 350;
    line-height: 1.2;
    font-family: "Public Sans", Helvetica, Arial, sans-serif;
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
