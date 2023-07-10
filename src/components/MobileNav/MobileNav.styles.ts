import styled from "styled-components";

export const NavigationMenu = styled.nav<{ isOpen: boolean }>`
  left: 0;
  right: 0;
  width: 100%;
  position: absolute;
  height: ${({ isOpen }) => (isOpen ? "100vh" : 0)};
  transition: height 0.3s ease-in-out;
  overflow: hidden;
  padding: 1rem;
  background: radial-gradient(
      farthest-corner at bottom right,
      rgba(58, 35, 63, 0.6),
      transparent 250px
    ),
    linear-gradient(180deg, #000 70%, #181222);
  height: calc(100vh - 68px) !important;
  overflow-y: scroll;
`;

export const NavigationList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;

  & > :nth-child(-n + 3) {
    border-bottom: 1px 	hsl(0, 0%, 8%) solid;
  }
`;

export const NavigationItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
`;

export const NavigationLink = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 1rem 0;
  color: #848895;
  background-color: transparent;
  border: none;
  font-weight: var(--font-weight-thin);
  font-size: 18px;
`;
