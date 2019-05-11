import React from "react";
import styled from "styled-components";

import IconButton from "./IconButton";
import { Bar } from "./Bar";
import { ReactComponent as Sun } from "../assets/sun.svg";
import { ReactComponent as Moon } from "../assets/moon.svg";
import { ReactComponent as SignOut } from "../assets/sign-out.svg";

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0;
`;

const Header = ({ dark, toggleDark, author, leaveChat }) => (
  <Bar as="header" top height="5rem">
    <Title>Doodle Chat</Title>
    <IconButton
      icon={dark ? Sun : Moon}
      onClick={toggleDark}
      color="accent"
      margin="0 0 0 auto"
    />
    {author && <IconButton icon={SignOut} onClick={leaveChat} />}
  </Bar>
);

export default Header;
