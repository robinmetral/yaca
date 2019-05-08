import React, { Component } from "react";

import Join from "./Join";
import Chat from "./Chat";

class App extends Component {
  // initialize state
  state = {
    author: undefined,
    messages: {}
  };

  componentDidMount() {
    // get returning author from localStorage
    if (localStorage.getItem("author")) {
      this.setState({ author: localStorage.getItem("author") });
    }
    // fetch messages
    this.fetchMessages();
  }

  // hit API to fetch messages
  fetchMessages = async () => {
    console.log("Fetching messages...");
    // fetch messages
    const response = await fetch(
      `https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?token=${
        process.env.REACT_APP_API_TOKEN
      }`
    );
    const json = await response.json();
    this.setState({
      messages: json
    });
  };

  // hit API to post message
  postMessage = async message => {
    const response = await fetch(
      `https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0`,
      {
        method: "POST",
        headers: {
          token: process.env.REACT_APP_API_TOKEN
        },
        body: JSON.stringify(message)
      }
    );
    const json = await response.json();
    console.log(json);
  };

  // join the chat by adding author to state
  joinChat = (author, remember) => {
    this.setState({ author });
    // save to localStorage if desired
    if (remember) {
      localStorage.setItem("author", author);
    }
  };

  // leave the chat by removing author from state
  leaveChat = () => {
    this.setState({ author: undefined });
    // clear localStorage
    localStorage.clear();
  };

  render() {
    if (!this.state.messages) return <p>Loading...</p>;
    else if (!this.state.author) return <Join joinChat={this.joinChat} />;
    else
      return (
        <Chat
          author={this.state.author}
          messages={this.state.messages}
          leaveChat={this.leaveChat}
        />
      );
  }
}

export default App;
