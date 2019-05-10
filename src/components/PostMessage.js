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
    // prevent form from submitting
    event.preventDefault();
    // build message object
    const message = {
      message: this.state.message,
      author: this.props.author
    };
    // call function to send message
    this.props.postMessage(message);
    // reset form
    this.setState({
      message: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          required
          type="text"
          value={this.state.message}
          onChange={this.handleChange}
          placeholder="Write your message..."
        />
        <input type="submit" label="Send!" />
      </form>
    );
  }
}

export default PostMessage;
