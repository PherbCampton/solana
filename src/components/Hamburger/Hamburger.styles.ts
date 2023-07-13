import styled from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  position: relative;
`;

export const HamburgerMenu = styled.div<{ isOpen: boolean }>`
  width: 30px;
  height: 20px;
  display: flex;
  cursor: pointer;
  align-items: flex-end;
  flex-direction: column;
  justify-content: space-around;
  transition: transform 0.3s ease-in-out;

  div {
    width: 20px;
    height: 2px;
    background-color: white;
    transition: transform 0.3s ease-in-out;
  }

  div:nth-child(1) {
    transform-origin: top left;
    transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "none")};
  }

  div:nth-child(2) {
    opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
  }

  div:nth-child(3) {
    transform-origin: bottom left;
    transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "none")};
  }
`;
