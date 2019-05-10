import React from "react";
import styled from "styled-components";

import { ReactComponent as Sun } from "../assets/sun.svg";
import { ReactComponent as Moon } from "../assets/moon.svg";
import { Bar } from "./Bar";

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
  <Bar as="header" top height="5rem">
    <Title>Doodle Chat</Title>
    <Icon as={dark ? Sun : Moon} onClick={toggleDark} />
  </Bar>
);

export default Header;
