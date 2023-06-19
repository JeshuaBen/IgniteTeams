import * as S from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import Button from "@components/Button";
import Input from "@components/Input";

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

        <Input />

        <Button
          title="Criar"
          style={{
            marginTop: 20,
          }}
        />
      </S.Content>
    </S.Container>
  );
};

export default NewGroup;
