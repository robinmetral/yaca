import React from "react";
import styled from "styled-components";

const Main = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Layout = ({ children }) => <Main>{children}</Main>;

export default Layout;
