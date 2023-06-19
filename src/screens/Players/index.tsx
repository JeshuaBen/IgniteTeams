import * as S from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import IconButton from "@components/IconButton";
import Input from "@components/Input";

const Players = () => {
  return (
    <S.Container>
      <Header showBackButton />

      <Highlight
        title="Nome da turma"
        subtitle="Adicione a galera e separe os times"
      />

      <S.Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <IconButton iconName="add" />
      </S.Form>
    </S.Container>
  );
};

export default Players;
