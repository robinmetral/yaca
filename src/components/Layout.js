import React from "react";
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

const Layout = ({ dark, toggleDark, author, leaveChat, children }) => (
  <ThemeProvider theme={dark ? darkTheme : lightTheme}>
    <Container>
      <GlobalStyle />
      <Header
        dark={dark}
        toggleDark={toggleDark}
        author={author}
        leaveChat={leaveChat}
      />
      <main>{children}</main>
    </Container>
  </ThemeProvider>
);

export default Layout;
