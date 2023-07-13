import * as S from "./DesktopNav.styles";
import DesktopNavItem from "./DesktopNavItem/DesktopNavItem";


const DesktopNav: React.FC = () => {

  return (
    <S.NavigationMenu>
      <S.NavigationList>
        <DesktopNavItem linkTitle="Learn"/>
        <DesktopNavItem linkTitle="Build"/>
        <DesktopNavItem linkTitle="Network"/>
        <DesktopNavItem linkTitle="Community"/>
      </S.NavigationList>
    </S.NavigationMenu>
  );
};

export default DesktopNav;
