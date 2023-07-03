import { useState } from "react";
import * as S from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import Button from "@components/Button";
import Input from "@components/Input";
import { useNavigation } from "@react-navigation/native";

const NewGroup = () => {
  const [groupName, setGroupName] = useState<string>("");

  const navigation = useNavigation();

  const handleAddGroups = () => {
    navigation.navigate("players", {
      group: groupName,
    });
  };

  return (
    <S.Container>
      <Header showBackButton />

      <S.Content>
        <S.Icon />
        <Highlight
          title="Nova turma"
          subtitle="Crie a tuma para adicionar as pessoas"
        />

        <Input placeholder="Nome da turma" onChangeText={setGroupName} />

        <Button
          title="Criar"
          style={{
            marginTop: 20,
          }}
          onPress={handleAddGroups}
        />
      </S.Content>
    </S.Container>
  );
};

export default NewGroup;
