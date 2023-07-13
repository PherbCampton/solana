import * as S from "./Card.styles";

interface CardProps {
  borderColor: string;
  heading: string;
  description: string;
  value: string;
  tag: string;
}

const Card: React.FC<CardProps> = ({
  borderColor,
  heading,
  description,
  value,
  tag
}) => {
  return (
    <S.Wrapper>
      <S.Heading borderColor={borderColor}>{heading}</S.Heading>
      <S.Description>{description}</S.Description>
      <S.Value>{value}</S.Value>
      <S.Tag>{tag}</S.Tag>
    </S.Wrapper>
  );
};

export default Card;
