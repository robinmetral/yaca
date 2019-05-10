import React from "react";
import styled from "styled-components";

import { ReactComponent as Sun } from "../assets/sun.svg";
import { ReactComponent as Moon } from "../assets/moon.svg";

const StyledHeader = styled.header`
  position: sticky;
  height: 5rem;
  top: 0;
  z-index: 10;
  background: ${({ theme }) => theme.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.medium};
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0;
`;

const Icon = styled.div`
  height: 2.5rem;
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
    <Title>Doodle Chat</Title>
    <Icon as={dark ? Sun : Moon} onClick={toggleDark} />
  </StyledHeader>
);

export default Header;
