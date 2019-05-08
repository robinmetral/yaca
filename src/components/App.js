import React, { Component } from "react";

import Join from "./Join";

class App extends Component {
  state = {
    author: undefined,
    messages: {}
  };

  componentDidMount() {
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

  render() {
    if (!this.state.messages) return <p>Loading...</p>;
    else if (!this.state.author) return <Join />;
    else return <div>Welcome {this.state.author}!</div>;
  }
}

export default App;
