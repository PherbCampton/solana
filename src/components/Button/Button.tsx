import { ButtonWrapper, ButtonText } from "./Button.styles";

interface ButtonProps {
  text: string;
  border?: boolean;
  backgroundColor: string;
}

const Button = ({ text, backgroundColor, border }: ButtonProps) => {
  return (
    <ButtonWrapper backgroundColor={backgroundColor} whiteBorder={border}>
      <ButtonText>{text}</ButtonText>
    </ButtonWrapper>
  );
};

export default Button;
