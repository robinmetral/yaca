import React, { Component } from "react";

import Join from "./Join";
import Chat from "./Chat";
import Layout from "./styled/Layout";

class App extends Component {
  // initialize state
  state = {
    author: undefined,
    messages: {},
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
    console.log("Fetching messages...");
    // fetch messages
    const response = await fetch(
      `https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?token=${
        process.env.REACT_APP_API_TOKEN
      }`
    );
    const json = await response.json();
    console.log(json);
    /* awaiting token
    this.setState({
      messages: json
    });
    */
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
    localStorage.removeItem("author");
  };

  // toggle dark light theme and save to localStorage
  toggleDark = () => {
    localStorage.setItem("dark", !this.state.dark);
    this.setState({ dark: !this.state.dark });
  };

  render() {
    return (
      <Layout dark={this.state.dark} toggleDark={this.toggleDark}>
        {!this.state.messages && <p>Loading...</p>}
        {this.state.author ? (
          <Chat
            author={this.state.author}
            messages={this.state.messages}
            postMessage={this.postMessage}
            leaveChat={this.leaveChat}
          />
        ) : (
          <Join joinChat={this.joinChat} />
        )}
      </Layout>
    );
  }
}

export default App;
