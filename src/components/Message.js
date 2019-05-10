import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin: 1.5rem 0;
`;

const Box = styled.div`
  background: ${({ theme }) => theme.box};
  max-width: 40rem;
  padding: 0.5rem 1rem;
  margin-left: ${({ own }) => (own ? "auto" : "0")};
  display: flex;
  flex-direction: column;
`;

const Author = styled.span`
  font-weight: 600;
`;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Time = styled.small`
  margin-left: 2rem;
  align-self: flex-end;
`;

const Message = ({ message, author }) => (
  <Container>
    <Box own={message.author === author ? true : false}>
      <Author>{message.author}</Author>
      <Body>
        {message.message}
        <Time>{message.timestamp}</Time>
      </Body>
    </Box>
  </Container>
);

export default Message;
