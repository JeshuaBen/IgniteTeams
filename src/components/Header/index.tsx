import * as S from "./styles";

import logoImg from "@assets/logo.png";
import { Props } from "./types";

export const Header: React.FC<Props> = ({ showBackButton = false }) => {
  return (
    <S.Container>
      {showBackButton && (
        <S.BackButton>
          <S.BackIcon />
        </S.BackButton>
      )}

      <S.Logo source={logoImg} />
    </S.Container>
  );
};
