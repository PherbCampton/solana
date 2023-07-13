import { useState, useEffect } from "react";
import Hamburger from "../Hamburger/Hamburger";
import MobileNav from "../MobileNav/MobileNav";
import * as S from "./Nav.styles";
import DesktopNav from "../DesktopNav/DesktopNav";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1024);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

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
        {isDesktop ? (
          <DesktopNav />
        ) : (
          <Hamburger onClick={handleMenuClick} isOpen={isOpen} />
        )}
      </S.content>
      {isOpen && <MobileNav isOpen={isOpen} />}
    </S.wrapper>
  );
};

export default Nav;
