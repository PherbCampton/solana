import { useState } from "react";
import * as S from "./MobileNavItem.styles";

interface MobileNavItemProps {
  linkTitle: string;
}

const MobileNavItem: React.FC<MobileNavItemProps> = ({linkTitle}) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const handleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  return (
    <>
      <S.NavigationItem isDropDownOpen={isDropDownOpen}>
        <S.NavigationLink onClick={handleDropDown}>
          {linkTitle}{" "}
          {isDropDownOpen ? (
            <svg width="24" height="24">
              <g fill="none" fill-rule="evenodd">
                <path d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M6.707 15.707a1 1 0 1 1-1.414-1.414l6-6a1 1 0 0 1 1.383-.03l6 5.5a1 1 0 1 1-1.352 1.474l-5.294-4.853-5.323 5.323Z"
                ></path>
              </g>
            </svg>
          ) : (
            <svg width="24" height="24">
              <g fill="none" fill-rule="evenodd">
                <path d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M17.293 8.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.383.03l-6-5.5a1 1 0 1 1 1.352-1.474l5.294 4.853 5.323-5.323Z"
                ></path>
              </g>
            </svg>
          )}
        </S.NavigationLink>
        {isDropDownOpen && (
          <S.NavDropdown>
            <S.DropdownHeader>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle
                  cx="9"
                  cy="9"
                  r="8.5"
                  fill="#19FB9B"
                  fill-opacity=".2"
                  stroke="#19FB9B"
                  stroke-linejoin="round"
                ></circle>
                <path
                  d="M12.5 9c0 2.432-.44 4.61-1.129 6.16-.344.777-.742 1.374-1.159 1.77-.414.394-.822.57-1.212.57s-.798-.176-1.212-.57c-.417-.396-.815-.993-1.16-1.77C5.94 13.61 5.5 11.433 5.5 9s.44-4.61 1.128-6.16c.345-.777.743-1.374 1.16-1.77C8.202.675 8.61.5 9 .5s.798.176 1.212.57c.417.396.815.993 1.16 1.77C12.06 4.39 12.5 6.567 12.5 9Z"
                  stroke="#19FB9B"
                  stroke-linejoin="round"
                ></path>
                <mask
                  id="a"
                  maskUnits="userSpaceOnUse"
                  x="3"
                  y="2"
                  width="6"
                  height="4"
                  fill="#000"
                >
                  <rect fill="#fff" x="3" y="2" width="6" height="4"></rect>
                  <path d="M4 5a2 2 0 1 1 4 0H4Z"></path>
                </mask>
                <path
                  d="M4 5a2 2 0 1 1 4 0H4Z"
                  stroke="#063321"
                  stroke-linejoin="round"
                  mask="url(#a)"
                ></path>
                <mask
                  id="b"
                  maskUnits="userSpaceOnUse"
                  x="9"
                  y="12"
                  width="6"
                  height="4"
                  fill="#000"
                >
                  <rect fill="#fff" x="9" y="12" width="6" height="4"></rect>
                  <path d="M14 13a2 2 0 1 1-4 0h4Z"></path>
                </mask>
                <path
                  d="M14 13a2 2 0 1 1-4 0h4Z"
                  stroke="#063321"
                  stroke-linejoin="round"
                  mask="url(#b)"
                ></path>
                <path
                  d="M.5 9h17"
                  stroke="#19FB9B"
                  stroke-linejoin="round"
                ></path>
                <circle
                  cx="6"
                  cy="5"
                  r="1.5"
                  fill="#063321"
                  stroke="#19FB9B"
                  stroke-linejoin="round"
                ></circle>
                <circle
                  cx="12"
                  cy="13"
                  r="1.5"
                  fill="#063321"
                  stroke="#19FB9B"
                  stroke-linejoin="round"
                ></circle>
              </svg>
              Start here
            </S.DropdownHeader>
            <S.DropdownLinks>
              <S.DropdownLinksHead>
                Blockchain and Solana 101
              </S.DropdownLinksHead>
              <S.DropdownLinksDescription>
                The basics on all things Solana and web3
              </S.DropdownLinksDescription>
            </S.DropdownLinks>
            <S.DropdownLinks>
              <S.DropdownLinksHead>Intro to NFTs</S.DropdownLinksHead>
              <S.DropdownLinksDescription>
                Everything you need to know about NFTs on Solana
              </S.DropdownLinksDescription>
            </S.DropdownLinks>
            <S.DropdownLinks>
              <S.DropdownLinksHead>Environmental Impact</S.DropdownLinksHead>
              <S.DropdownLinksDescription>
                How Solana is supporting a greener web3
              </S.DropdownLinksDescription>
            </S.DropdownLinks>
          </S.NavDropdown>
        )}
      </S.NavigationItem>
    </>
  );
};

export default MobileNavItem;
