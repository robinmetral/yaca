import styled from "styled-components";

const TextInput = styled.input`
  /* reset */
  appearance: none;
  font-family: inherit;
  font-size: 100%;
  box-sizing: border-box;
  margin: 0;
  /* style */
  flex: 1;
  border: ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.borderradius};
  background-color: ${({ theme }) => theme.box};
  color: ${({ theme }) => theme.text};
  padding: 1rem 2rem;
`;

export default TextInput;
