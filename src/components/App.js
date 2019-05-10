import React, { Component } from "react";

import Join from "./Join";
import Chat from "./Chat";
import Layout from "./Layout";
import Message from "./Message";
import PostMessage from "./PostMessage";

class App extends Component {
  // initialize state
  state = {
    author: undefined,
    messages: [],
    dark: true
  };

  // ref at the bottom of messages to scroll
  messagesEnd = React.createRef();

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
    // scroll to the bottom
    this.scrollToBottom();
  }

  componentDidUpdate() {
    // scroll to the bottom
    this.scrollToBottom();
  }

  // method to scroll to the bottom of messages
  scrollToBottom = () => {
    this.messagesEnd.current.scrollIntoView({ behavior: "smooth" });
  };

  // hit API to fetch messages
  fetchMessages = async () => {
    // DEV MESSAGES
    const messages = [];
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(i =>
      messages.push({
        author: `Author${i}`,
        message: `A little message by Author${i}`
      })
    );
    console.log(messages);
    this.setState({ messages });
    // END

    /* AWAITING TOKEN
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
    */
  };

  // hit API to post message
  postMessage = async message => {
    // hit api
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
    // mirror to state
    // take a copy of state
    let messages = this.state.messages;
    // add message
    messages.push(message);
    // update state
    this.setState({ messages });
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
        <main>
          {this.state.messages ? (
            <>
              {this.state.messages.map((message, key) => (
                <Message
                  key={key}
                  message={message}
                  author={this.state.author}
                />
              ))}
              <div ref={this.messagesEnd} />
            </>
          ) : (
            <p>Loading...</p>
          )}
        </main>
        <Chat>
          {this.state.author ? (
            <>
              <PostMessage
                author={this.state.author}
                postMessage={this.postMessage}
              />
              <button onClick={this.leaveChat}>Leave the chat</button>
            </>
          ) : (
            <Join joinChat={this.joinChat} />
          )}
        </Chat>
      </Layout>
    );
  }
}

export default App;
