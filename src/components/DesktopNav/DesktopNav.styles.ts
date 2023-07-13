import styled from "styled-components";

export const NavigationMenu = styled.nav`
  left: 0;
  right: 0;
  position: relative;
  transition: height 0.3s ease-in-out;
  float: right;


  @media ${(p) => p.theme.breakpoints.lgAndSmaller} {
    display: none;
  }
`;

export const NavigationList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 20px;
`;
