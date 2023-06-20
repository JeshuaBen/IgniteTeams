import * as S from "./styles";
import { FilterProps } from "./types";

const Filter = ({ title, isFilterActive = false, ...rest }: FilterProps) => {
  return (
    <S.Container isFilterActive={isFilterActive} {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default Filter;
