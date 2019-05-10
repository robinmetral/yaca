import React from "react";
import styled from "styled-components";

import PostMessage from "./PostMessage";
import Join from "./Join";

const StyledChat = styled.section`
  position: sticky;
  bottom: 0;
  z-index: 10;
  background: ${({ theme }) => theme.bg};
`;

const Chat = ({ author, postMessage, leaveChat, joinChat }) => (
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

export default Chat;
