import React, { Component } from "react";

import Join from "./Join";
import Chat from "./Chat";

class App extends Component {
  state = {
    author: undefined,
    messages: {}
  };

  componentDidMount() {
    // check if author exists in localStorage
    if (localStorage.getItem("author")) {
      this.setState({ author: localStorage.getItem("author") });
    }

    // fetch messages
    fetch(`https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?token=`)
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({
          messages: json
        });
      });
  }

  joinChat = (author, remember) => {
    this.setState({ author });
    if (remember) {
      localStorage.setItem("author", author);
    }
  };

  leaveChat = () => {
    // remove author from state
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
