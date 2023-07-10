import MobileNavItem from "../MobileNavItem/MobileNavItem";
import * as S from "./MobileNav.styles";

interface MobileNavProps {
  isOpen: boolean;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen }) => {

  return (
    <S.NavigationMenu isOpen={isOpen}>
      <S.NavigationList>
        <MobileNavItem linkTitle="Learn"/>
        <MobileNavItem linkTitle="Build"/>
        <MobileNavItem linkTitle="Network"/>
        <MobileNavItem linkTitle="Community"/>
      </S.NavigationList>
    </S.NavigationMenu>
  );
};

export default MobileNav;
