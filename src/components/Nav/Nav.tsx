import { useState } from "react";
import Hamburger from "../Hamburger/Hamburger";
import MobileNav from "../MobileNav/MobileNav";
import * as S from "./Nav.styles";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.wrapper>
      <S.content>
        <img
          alt="Solana"
          width="149"
          height="22"
          decoding="async"
          data-nimg="1"
          src="/images/solanaLogo.svg"
        ></img>
        <Hamburger onClick={handleMenuClick} isOpen={isOpen} />
      </S.content>
      {isOpen && <MobileNav isOpen={isOpen} />}
    </S.wrapper>
  );
};

export default Nav;
