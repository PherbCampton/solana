import * as S from './Hamburger.styles';


interface Hamburger {
  onClick: () => void;
  isOpen: boolean;
}



const Hamburger: React.FC<Hamburger> = ({onClick, isOpen}) => {

  return (
    <S.MenuContainer>
      <S.HamburgerMenu onClick={onClick} isopen={isOpen}>
        <div></div>
        <div></div>
        <div></div>
      </S.HamburgerMenu>
    </S.MenuContainer>
  );
};

export default Hamburger;
