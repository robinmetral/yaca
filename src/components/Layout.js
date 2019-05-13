import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";

import GlobalStyle from "./styled/GlobalStyle";
import { lightTheme, darkTheme } from "./styled/Themes";
import Header from "./Header";

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
          <Header
            dark={this.props.dark}
            toggleDark={this.props.toggleDark}
            author={this.props.author}
            leaveChat={this.props.leaveChat}
          />
          <main>{this.props.children}</main>
        </Container>
      </ThemeProvider>
    );
  }
}

export default Layout;
