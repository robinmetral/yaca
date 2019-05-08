import React, { Component } from "react";

class PostMessage extends Component {
  // initialize form state
  state = {
    message: ""
  };

  handleChange = event => {
    this.setState({
      message: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const message = {
      message: this.state.message,
      author: this.props.author
    };
    this.props.postMessage(message);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="message">Message</label>
        <input
          required
          type="text"
          id="message"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <input type="submit" label="Send!" />
      </form>
    );
  }
}

export default PostMessage;
