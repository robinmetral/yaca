import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin: 1.5rem 0;
`;

const Box = styled.div`
  background: ${({ theme }) => theme.box};
  max-width: 40rem;
  padding: 1rem 2rem;
  margin-left: ${({ own }) => (own ? "auto" : "0")};
  border-radius: ${({ theme }) => theme.borderradius};
  border: ${({ theme }) => theme.border}
  display: flex;
  flex-direction: column;
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
    <Box own={message.author === author ? true : false}>
      {message.author !== author && <Author>{message.author}</Author>}
      <Body>
        {message.message}
        <Time>{message.timestamp}</Time>
      </Body>
    </Box>
  </Container>
);

export default Message;
