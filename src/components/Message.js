import React from "react";
import styled from "styled-components";

import { formatTime, decodeHTML } from "../helpers";

const Container = styled.div`
  display: flex;
  margin: 1rem 2rem;
`;

/* speech bubble css3 code from https://leaverou.github.io/bubbly/ */
const Box = styled.div`
  background: ${({ theme }) => theme.box};
  max-width: 40rem;
  padding: 1rem 2rem;
  /* place left or right based on author and add space for speech bubbles */
  margin-left: ${({ right }) => (right ? "auto" : "none")};
  border-radius: ${({ theme }) => theme.borderradius};
  border: ${({ theme }) => theme.border};
  display: flex;
  flex-direction: column;
  /* positioning for speech bubbles */
  position: relative;
  /* speech bubbles */
  &::before {
    content: "";
    position: absolute;
    left: ${({ right }) => (right ? "auto" : "0")};
    right: ${({ right }) => (right ? "0" : "auto")};
    top: 50%;
    width: 0;
    height: 0;
    border: 1rem solid transparent;
    border-color: ${({ right, theme }) =>
      right
        ? `transparent transparent transparent ${theme.medium}`
        : `transparent ${theme.medium} transparent transparent`};
    border-width: ${({ right }) => (right ? "1rem 0 0 1rem" : "0 1rem 1rem 0")};
    margin: ${({ right }) =>
      right ? "-0.5rem -1rem auto auto" : "-0.5rem auto auto -1rem"};
  }
  &::after {
    content: "";
    position: absolute;
    left: ${({ right }) => (right ? "auto" : "0")};
    right: ${({ right }) => (right ? "0" : "auto")};
    top: 50%;
    width: 0;
    height: 0;
    border: 0.8rem solid transparent;
    border-color: ${({ right, theme }) =>
      right
        ? `transparent transparent transparent ${theme.box}`
        : `transparent ${theme.box} transparent transparent`};
    border-width: ${({ right }) =>
      right ? "0.8rem 0 0 0.8rem" : "0 0.8rem 0.8rem 0"};
    margin: ${({ right }) =>
      right ? "-0.4rem -0.8rem auto auto" : "-0.4rem auto auto -0.8rem"};
  }
`;

const Author = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.accent};
`;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Time = styled.span`
  margin-left: 2rem;
  align-self: flex-end;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.lighttext};
`;

const Message = ({ message, author }) => (
  <Container>
    <Box right={message.author === author ? true : false}>
      {message.author !== author && <Author>{message.author}</Author>}
      <Body>
        {decodeHTML(message.message)}
        <Time>{formatTime(message.timestamp)}</Time>
      </Body>
    </Box>
  </Container>
);

export default Message;
