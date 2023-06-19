import * as S from "./styles";
import { IconButtonProps } from "./types";

const IconButton = ({
  iconName,
  type = "PRIMARY",
  ...rest
}: IconButtonProps) => {
  return (
    <S.Container {...rest}>
      <S.Icon type={type} name={iconName} />
    </S.Container>
  );
};

export default IconButton;
