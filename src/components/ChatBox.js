import React, { Component } from "react";
import styled from "styled-components";

import TextInput from "./TextInput";
import IconButton from "./IconButton";
import { Bar } from "./Bar";
import { ReactComponent as Send } from "../assets/paper-plane.svg";

const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
`;

class ChatBox extends Component {
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
      <Bar as="section" bottom height="5rem">
        <Form onSubmit={this.handleSubmit}>
          <TextInput
            required
            pattern=".{1,256}"
            type="text"
            value={this.state.message}
            onChange={this.handleChange}
            placeholder="Write your message..."
          />
          <IconButton type="submit" icon={Send} margin="0 0 0 1rem" />
        </Form>
      </Bar>
    );
  }
}

export default ChatBox;
