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
          <header>
            <h1>Doodle Chat</h1>
          </header>
          <Main>{this.props.children}</Main>
          <footer>
            <button onClick={this.props.toggleDark}>
              {this.props.dark ? `Light` : `Dark`}
            </button>
          </footer>
        </>
      </ThemeProvider>
    );
  }
}

export default Layout;
