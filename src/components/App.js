import React, { Component } from "react";

import Layout from "./Layout";
import MessagesList from "./MessagesList";
import JoinChat from "./JoinChat";

class App extends Component {
  // initialize state
  state = {
    author: undefined,
    messages: [],
    dark: true
  };

  componentDidMount() {
    // get returning author from localStorage
    const author = localStorage.getItem("author");
    if (author) {
      this.setState({ author });
    }
    // get theme from localStorage
    const dark = localStorage.getItem("dark");
    if (dark === "false") {
      // dark value in localStorage is a string
      this.setState({ dark: false });
    }
    // fetch messages
    this.fetchMessages();
  }

  // hit API to fetch messages
  fetchMessages = async () => {
    // fetch messages
    const response = await fetch(
      `https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?token=${
        process.env.REACT_APP_API_TOKEN
      }`
    );
    const json = await response.json();
    // save messages to state
    this.setState({
      messages: json
    });
  };

  // hit API to post message
  postMessage = async message => {
    await fetch(`https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: process.env.REACT_APP_API_TOKEN
      },
      body: JSON.stringify(message)
    });
    // improvement: deal with error messages from response here
    // fetch new messages
    this.fetchMessages();
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
    localStorage.removeItem("author");
  };

  // toggle dark theme and save to localStorage
  toggleDark = () => {
    localStorage.setItem("dark", !this.state.dark);
    this.setState({ dark: !this.state.dark });
  };

  render() {
    return (
      <Layout
        dark={this.state.dark}
        toggleDark={this.toggleDark}
        author={this.state.author}
        leaveChat={this.leaveChat}
      >
        {this.state.author ? (
          <MessagesList
            messages={this.state.messages}
            author={this.state.author}
            postMessage={this.postMessage}
          />
        ) : (
          <JoinChat joinChat={this.joinChat} />
        )}
      </Layout>
    );
  }
}

export default App;
