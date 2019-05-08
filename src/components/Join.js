import React, { Component } from "react";

class Join extends Component {
  state = {
    author: "",
    remember: false
  };

  handleChange = event => {
    const { name } = event.target;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.joinChat(this.state.author, this.state.remember);
  };

  render() {
    return (
      <div>
        <p>What should we call you?</p>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="author">Username</label>
          <input
            required
            type="text"
            id="author"
            name="author"
            value={this.state.author}
            onChange={this.handleChange}
          />
          <label htmlFor="remember">Remember me</label>
          <input
            type="checkbox"
            id="remember"
            name="remember"
            checked={this.state.remember}
            onChange={this.handleChange}
          />
          <input type="submit" value="Join!" />
        </form>
      </div>
    );
  }
}

export default Join;
