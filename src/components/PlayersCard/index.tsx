import IconButton from "@components/IconButton";
import * as S from "./styles";
import { PlayersCardProps } from "./types";

const PlayersCard = ({ playerName, onRemovePlayer }: PlayersCardProps) => {
  return (
    <S.Container>
      <S.Icon name="person" />
      <S.PlayersName>{playerName}</S.PlayersName>
      <IconButton type="SECONDARY" iconName="close" onPress={onRemovePlayer} />
    </S.Container>
  );
};

export default PlayersCard;
