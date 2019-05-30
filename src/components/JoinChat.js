import React, { Component } from "react";
import styled from "styled-components";

import IconButton from "./IconButton";
import TextInput from "./styled/TextInput";
import Checkbox from "./styled/Checkbox";
import { ReactComponent as SignIn } from "../assets/sign-in.svg";

const Form = styled.form`
  margin: 40vh 2rem 0 2rem;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

class JoinChat extends Component {
  state = {
    user: "",
    remember: false
  };

  // control form inputs
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

  // call joinChat method
  handleSubmit = event => {
    event.preventDefault();
    this.props.joinChat(this.state.user, this.state.remember);
  };

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Container>
            <TextInput
              required
              pattern=".{1,64}"
              type="text"
              name="user"
              value={this.state.user}
              onChange={this.handleChange}
              placeholder="Choose a username"
              aria-label="Your username"
            />
            <Label htmlFor="remember">
              <Checkbox
                type="checkbox"
                id="remember"
                name="remember"
                checked={this.state.remember}
                onChange={this.handleChange}
              />
              Remember me
            </Label>
          </Container>
          <IconButton type="submit" icon={SignIn} label="Join the chat" />
        </Form>
      </>
    );
  }
}

export default JoinChat;
