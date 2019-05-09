import React from "react";
import styled from "styled-components";

import { ReactComponent as Sun } from "../assets/sun.svg";
import { ReactComponent as Moon } from "../assets/moon.svg";

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background: ${({ theme }) => theme.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

const Icon = styled.div`
  height: 3rem;
  &:hover {
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(1px);
  }
  path {
    fill: ${({ theme }) => theme.accent};
  }
`;

const Header = ({ dark, toggleDark }) => (
  <StyledHeader>
    <h1>Doodle Chat</h1>
    <Icon as={dark ? Sun : Moon} onClick={toggleDark} />
  </StyledHeader>
);

export default Header;
