import React, { Component } from "react";

class Chat extends Component {
  render() {
    return (
      <div>
        <p>Hey {this.props.author}!</p>
        <button onClick={this.props.leaveChat}>Leave the chat</button>
      </div>
    );
  }
}

export default Chat;
