import React from "react";
import styled from "styled-components";

import PostMessage from "./PostMessage";
import Join from "./Join";

const StyledChat = styled.section`
  position: sticky;
  height: 5rem;
  bottom: 0;
  z-index: 10;
  background: ${({ theme }) => theme.bg};
  display: flex;
  align-items: center;
  padding: 0 2rem;
  border-top: 1px solid ${({ theme }) => theme.medium};
`;

const ChatBox = ({ author, postMessage, leaveChat, joinChat }) => (
  <StyledChat>
    {author ? (
      <>
        <PostMessage author={author} postMessage={postMessage} />
        <button onClick={leaveChat}>Leave the chat</button>
      </>
    ) : (
      <Join joinChat={joinChat} />
    )}
  </StyledChat>
);

export default ChatBox;
