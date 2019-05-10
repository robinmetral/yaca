import React from "react";

import PostMessage from "./PostMessage";
import Join from "./Join";
import { Bar } from "./Bar";

const ChatBox = ({ author, postMessage, leaveChat, joinChat }) => (
  <Bar as="section" bottom height="15rem">
    {author ? (
      <>
        <PostMessage author={author} postMessage={postMessage} />
        <button onClick={leaveChat}>Leave the chat</button>
      </>
    ) : (
      <Join joinChat={joinChat} />
    )}
  </Bar>
);

export default ChatBox;
