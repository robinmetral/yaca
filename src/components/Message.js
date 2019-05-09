import React from "react";
import styled from "styled-components";

const StyledMessage = styled.div`
  display: flex;
  margin: 1.5rem 0;
`;

const Div = styled.div`
  background: ${({ theme }) => theme.box};
  max-width: 30rem;
  padding: 0.5rem 1rem;
  margin-left: ${({ own }) => (own ? "auto" : "0")};
`;

const Message = ({ message, author }) => (
  <StyledMessage>
    <Div own={message.author === author ? true : false}>
      <strong>{message.author}</strong>
      {message.message}
    </Div>
  </StyledMessage>
);

export default Message;
