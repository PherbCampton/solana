import styled from "styled-components";

export const ButtonWrapper = styled.button<{ backgroundcolor: string, whiteborder: boolean | undefined}>`
  border: none;
  display: flex;
  cursor: pointer;
  padding: 0.65rem 1.5rem;
  align-items: center;
  border-radius: 50px;
  min-width: fit-content;
  justify-content: center;
  background: ${(props) => props.backgroundcolor};
  border: ${({ whiteborder }) => (whiteborder ? `1px solid #ffffff` : 'none')};


  &:hover {
    background-color: ${(p) => p.theme.colors.SECONDARY};
  }
`;

export const ButtonText = styled.p`
  display: flex;
  font-size: 0.95rem;
  align-items: center;
  text-transform: uppercase;
  justify-content: space-between;
  font-weight: var(--font-weight-light);
  color: ${(p) => p.theme.colors.PRIMARY};
`;
