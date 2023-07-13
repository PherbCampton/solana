import styled from "styled-components";

export const NavigationItem = styled.div<{ isDropDownOpen: boolean }>`
  position: relative;
  width: 100%;
  border-bottom: ${({ isDropDownOpen }) => (isDropDownOpen && "none")} !important; 
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

export const NavDropdown = styled.div`
  background: #111214;
  padding: 25px;
  border: 1px solid hsla(0, 0%, 100%, 0.1);
  border-radius: 12px;
  color: #848895;
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


