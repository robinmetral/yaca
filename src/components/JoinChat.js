import React, { Component } from "react";
import styled from "styled-components";

import IconButton from "./IconButton";
import TextInput from "./styled/TextInput";
import { ReactComponent as SignIn } from "../assets/sign-in.svg";

const Form = styled.form`
  margin: 40vh 2rem 0 2rem;
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  /* reset */
  appearance: none;
  font-family: inherit;
  font-size: 100%;
  /* style */
  width: 2rem;
  height: 2rem;
  font-size: 2rem;
  border: ${({ theme }) => theme.border};
  border-radius: 2px;
  background-color: ${({ theme }) => theme.box};
  color: ${({ theme }) => theme.text};
  margin: 0 0.5rem;
  /* style and position checked */
  display: flex;
  align-items: center;
  justify-content: center;
  &:checked::before {
    content: "×";
  }
`;

class JoinChat extends Component {
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
      <>
        <Form onSubmit={this.handleSubmit}>
          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <TextInput
              required
              pattern=".{1,64}"
              type="text"
              name="author"
              value={this.state.author}
              onChange={this.handleChange}
              placeholder="Choose a username"
              aria-label="Your username"
            />
            <label
              htmlFor="remember"
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "1rem"
              }}
            >
              <Checkbox
                type="checkbox"
                id="remember"
                name="remember"
                checked={this.state.remember}
                onChange={this.handleChange}
              />
              Remember me
            </label>
          </div>
          <IconButton type="submit" icon={SignIn} label="Join the chat" />
        </Form>
      </>
    );
  }
}

export default JoinChat;
