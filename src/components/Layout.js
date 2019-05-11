import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";

import GlobalStyle from "./GlobalStyle";
import { lightTheme, darkTheme } from "./Themes";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
`;

class Layout extends Component {
  render() {
    return (
      <ThemeProvider theme={this.props.dark ? darkTheme : lightTheme}>
        <Container>
          <GlobalStyle />
          {this.props.children}
        </Container>
      </ThemeProvider>
    );
  }
}

export default Layout;
