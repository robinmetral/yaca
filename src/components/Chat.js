import React from "react";
import styled from "styled-components";

const StyledChat = styled.section`
  position: sticky;
  bottom: 0;
  z-index: 10;
  background: ${({ theme }) => theme.bg};
`;

const Chat = ({ children }) => <StyledChat>{children}</StyledChat>;

export default Chat;
