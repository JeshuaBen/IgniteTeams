import * as S from "./styles";
import { TButtonProps } from "./types";

const Button = ({ title, type = "PRIMARY", ...rest }: TButtonProps) => {
  return (
    <S.Container type={type} {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default Button;
