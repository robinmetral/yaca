import styled from "styled-components";

export const Bar = styled.div`
  position: sticky;
  height: 5rem;
  top: ${({ top }) => (top ? "0" : "")};
  bottom: ${({ bottom }) => (bottom ? "0" : "")};
  z-index: 10;
  background: ${({ theme }) => theme.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  border: 1px solid ${({ theme }) => theme.medium};
  border-width: ${({ top }) => (top ? "0 0 1px 0" : "1px 0 0 0")};
`;
