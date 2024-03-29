import * as S from "./styles";
import { GroupCardProps } from "./types";

export const GroupCard: React.FC<GroupCardProps> = ({ title, ...rest }) => {
  return (
    <S.Container {...rest}>
      <S.UserIcon />
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
