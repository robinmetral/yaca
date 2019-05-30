import React, { Component } from "react";

import Layout from "./Layout";
import MessagesList from "./MessagesList";
import JoinChat from "./JoinChat";

class App extends Component {
  // initialize state
  state = {
    user: undefined,
    messages: [],
    dark: false
  };

  componentDidMount() {
    // get returning user from localStorage
    const user = localStorage.getItem("user");
    if (user) {
      this.setState({ user });
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
    // fetch messages from proxy
    const response = await fetch(`/api`);
    const json = await response.json();
    // save messages to state
    this.setState({
      messages: json
    });
  };

  // hit API to post message
  postMessage = async message => {
    await fetch(`/api/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON(message)
    });
    // improvement: deal with error messages from response here
    // fetch new messages
    this.fetchMessages();
  };

  // join the chat by adding user to state
  joinChat = (user, remember) => {
    this.setState({ user });
    // save to localStorage if desired
    if (remember) {
      localStorage.setItem("user", user);
    }
  };

  // leave the chat by removing user from state
  leaveChat = () => {
    this.setState({ user: undefined });
    // clear localStorage
    localStorage.removeItem("user");
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
        user={this.state.user}
        leaveChat={this.leaveChat}
      >
        {this.state.user ? (
          <MessagesList
            messages={this.state.messages}
            user={this.state.user}
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
