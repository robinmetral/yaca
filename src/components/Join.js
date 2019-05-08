import React, { Component } from "react";

class Join extends Component {
  state = {
    author: ""
  };

  handleChange = event => {
    this.setState({
      author: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.joinChat(this.state.author);
  };

  render() {
    return (
      <div>
        <p>What should we call you?</p>
        <form onSubmit={this.handleSubmit}>
          <input
            required
            type="text"
            name="author"
            value={this.state.author}
            onChange={this.handleChange}
          />
          <input type="submit" value="Join!" />
        </form>
      </div>
    );
  }
}

export default Join;
