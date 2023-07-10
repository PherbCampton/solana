import styled from "styled-components";

export const ButtonWrapper = styled.button`
  border: none;
  display: flex;
  cursor: pointer;
  padding: 12px 36px;
  align-items: center;
  border-radius: 50px;
  justify-content: center;
  background-color: ${(p) => p.theme.colors.TERTIARY};

  &:hover {
    background-color: ${(p) => p.theme.colors.SECONDARY};
  }
`;