import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: none;
  border: none;
  padding: 0.5rem;
  margin-left: 1rem;
  &:hover {
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(1px);
  }
`;

const StyledIcon = styled.div`
  height: 2.5rem;
  path {
    fill: ${({ theme, color }) => (color ? theme[color] : theme.text)};
  }
`;

const Button = ({ icon, onClick, color, margin }) => (
  <StyledButton onClick={onClick} margin={margin}>
    <StyledIcon as={icon} color={color} />
  </StyledButton>
);

export default Button;
