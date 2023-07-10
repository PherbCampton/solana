import styled from "styled-components";

export const ButtonWrapper = styled.button<{ backgroundColor: string, whiteBorder: boolean | undefined}>`
  border: none;
  display: flex;
  cursor: pointer;
  padding: 12px 36px;
  align-items: center;
  border-radius: 50px;
  justify-content: center;
  background: ${(props) => props.backgroundColor};
  border: ${({ whiteBorder }) => (whiteBorder ? `1px solid #ffffff` : 'none')};


  &:hover {
    background-color: ${(p) => p.theme.colors.SECONDARY};
  }
`;

export const ButtonText = styled.p`
  display: flex;
  font-size: 15.2px;
  align-items: center;
  text-transform: uppercase;
  justify-content: space-between;
  font-weight: var(--font-weight-light);
  color: ${(p) => p.theme.colors.PRIMARY};
`;
