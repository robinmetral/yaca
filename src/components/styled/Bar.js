import styled from "styled-components";

// bar styles for Header and ChatBox
const Bar = styled.div`
  position: sticky;
  height: ${({ height }) => height};
  top: ${({ top }) => (top ? "0" : "")};
  bottom: ${({ bottom }) => (bottom ? "0" : "")};
  z-index: 10;
  background: ${({ theme }) => theme.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  border-bottom: ${({ theme, top }) =>
    top ? `1px solid ${theme.medium}` : "none"};
`;

export default Bar;
