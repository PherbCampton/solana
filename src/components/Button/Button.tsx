import { ButtonWrapper, ButtonText } from "./Button.styles";

interface ButtonProps {
  text: string;
  border?: boolean | undefined;
  backgroundColor: string;
}

const Button = ({ text, backgroundColor, border }: ButtonProps) => {
  return (
    <ButtonWrapper backgroundcolor={backgroundColor} whiteborder={border}>
      <ButtonText>{text}</ButtonText>
    </ButtonWrapper>
  );
};

export default Button;
