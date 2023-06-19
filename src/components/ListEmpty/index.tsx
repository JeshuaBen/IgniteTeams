import * as S from "./styles";
import { ListEmptyProps } from "./types";

const ListEmpty = ({ message }: ListEmptyProps) => {
  return (
    <S.Container>
      <S.Message>{message}</S.Message>
    </S.Container>
  );
};

export default ListEmpty;
