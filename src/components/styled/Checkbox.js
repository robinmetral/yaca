import styled from "styled-components";

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

export default Checkbox;
