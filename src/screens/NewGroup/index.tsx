import * as S from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import Button from "@components/Button";

const NewGroup = () => {
  return (
    <S.Container>
      <Header showBackButton />

      <S.Content>
        <S.Icon />
        <Highlight
          title="Nova turma"
          subtitle="Crie a tuma para adicionar as pessoas"
        />
        <Button title="Criar" />
      </S.Content>
    </S.Container>
  );
};

export default NewGroup;
