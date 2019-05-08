import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";

import GlobalStyle from "./GlobalStyle";
import { lightTheme, darkTheme } from "./Themes";

const Main = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: ${({ theme }) => theme.box};
`;

class Layout extends Component {
  render() {
    return (
      <ThemeProvider theme={this.props.dark ? darkTheme : lightTheme}>
        <>
          <GlobalStyle />
          <Main>{this.props.children}</Main>
        </>
      </ThemeProvider>
    );
  }
}

export default Layout;
