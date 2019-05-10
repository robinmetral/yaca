import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin: 1.5rem 0;
`;

const Box = styled.div`
  background: ${({ theme }) => theme.box};
  max-width: 30rem;
  padding: 0.5rem 1rem;
  margin-left: ${({ own }) => (own ? "auto" : "0")};
`;

const Message = ({ message, author }) => (
  <Container>
    <Box own={message.author === author ? true : false}>
      {message.author}
      <br />
      {message.message}
      <br />
      {message.timestamp}
    </Box>
  </Container>
);

export default Message;
