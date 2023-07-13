import * as S from "./Hero.styles";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <S.wrapper>
      <S.content>
        <S.heroHeader>
          Powerful for developers. <br />
          Fast for everyone.{" "}
        </S.heroHeader>
        <S.heroSubHeader>
          Bring blockchain to the people. Solana supports experiences for power
          users, new consumers, and everyone in between.
        </S.heroSubHeader>
        <S.buttons>
          <Button
            backgroundColor="linear-gradient(
            101.81deg,rgb(240, 135, 255) -4.52%,
          rgb(110, 31, 206) 54.5%,rgba(110, 31, 206, 0.2) 101.41%
          )"
            text="start building"
          />
          <Button backgroundColor="#000000" text="read docs" border={true} />
        </S.buttons>
      </S.content>
    </S.wrapper>
  );
};

export default Hero;
