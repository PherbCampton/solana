import styled from "styled-components";

export const NavigationItem = styled.div<{ isDropDownOpen: boolean }>`
  position: relative;
  border-bottom: ${({ isDropDownOpen }) => isDropDownOpen && "none"} !important;

  &:last-child{
    .dropdown {
    left: -100%;
    }
  }
`;

export const NavigationLink = styled.button`
  display: flex;
  align-items: center;
  position: relative;
  color: #848895;
  background-color: transparent;
  border: none;
  font-weight: var(--font-weight-thin);
  font-size: 18px;
`;

export const NavDropdown = styled.div`
  width: fit-content !important;
  background: #111214;
  position: absolute;
  padding: 25px;
  border: 1px solid hsla(0, 0%, 100%, 0.1);
  border-radius: 12px;
  color: #848895;
  top: calc(100% + 1rem);
  visibility: visible;
  opacity: 1;
  background: rgba(0, 0, 0, 0.9);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);
  display: block !important;
  transition: all 0.3s ease;
  left: auto;
  transform: translate3d(-50%, 0, 0);
  min-width: 490px;
`;

export const DropdownHeader = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  gap: 10px;
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
`;

export const DropdownLinks = styled.div`
  border: 1px solid transparent;
  padding: 0.5rem;
  margin: 0.5rem -0.5rem;
  border-radius: 8px;
  color: #848895;
`;

export const DropdownLinksHead = styled.p`
  font-weight: var(--font-weight-medium);
  font-size: 16px;
`;

export const DropdownLinksDescription = styled.p`
  font-weight: var(--font-weight-thin);
  font-size: 16px;
  color: #848895;
`;
