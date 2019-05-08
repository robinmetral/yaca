import React, { Component } from "react";

import PostMessage from "./PostMessage";

class Chat extends Component {
  render() {
    return (
      <div>
        <p>Hey {this.props.author}!</p>
        <PostMessage
          author={this.props.author}
          postMessage={this.props.postMessage}
        />
        <button onClick={this.props.leaveChat}>Leave the chat</button>
      </div>
    );
  }
}

export default Chat;
