import { createGlobalStyle } from "styled-components";
import RobotoLight from "../../assets/Roboto-Light.woff2";
import RobotoMedium from "../../assets/Roboto-Medium.woff2";

// app global styles using styled-component's createGlobalStyle API
// https://www.styled-components.com/docs/api#createglobalstyle
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Roboto";
    /* font-display swap to speed up first contentful paint */
    font-display: swap;
    src: url(${RobotoLight}) format("woff2");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "Roboto";
    font-display: swap;
    src: url(${RobotoMedium}) format("woff2");
    font-weight: bold;
    font-style: normal;
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
    line-height: 1.4;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
