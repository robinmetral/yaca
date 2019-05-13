import React, { Component } from "react";

import ChatBox from "./ChatBox";
import Message from "./Message";

class MessagesList extends Component {
  // ref at the bottom of messages to scroll to bottom
  messagesEnd = React.createRef();

  // method to scroll to the bottom of messages
  scrollToBottom = () => {
    if (this.messagesEnd.current) {
      this.messagesEnd.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // scroll to most recent messages on component mount
  componentDidMount() {
    this.scrollToBottom();
  }

  // scroll to most recent messages on component update
  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    return (
      <>
        {this.props.messages ? (
          <>
            {this.props.messages.map((message, key) => (
              <Message key={key} message={message} author={this.props.author} />
            ))}
            <div ref={this.messagesEnd} />
            <ChatBox
              author={this.props.author}
              postMessage={this.props.postMessage}
            />
          </>
        ) : (
          <p>Loading messages...</p>
        )}
      </>
    );
  }
}

export default MessagesList;
