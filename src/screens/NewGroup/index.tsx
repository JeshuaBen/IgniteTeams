import { useState } from "react";
import * as S from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import Button from "@components/Button";
import Input from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { createGroup } from "@storage/group/createGroup";
import { AppError } from "@utils/AppError";
import { Alert } from "react-native";

const NewGroup = () => {
  const [groupName, setGroupName] = useState<string>("");

  const navigation = useNavigation();

  const handleAddGroups = async () => {
    try {
      if (groupName.trim().length === 0) {
        return Alert.alert(
          "Novo Grupo",
          "O nome da turma não pode estar vazio"
        );
      }

      await createGroup(groupName);

      navigation.navigate("players", {
        group: groupName,
      });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo Grupo", error.message);
      } else {
        Alert.alert("Novo Grupo", "Não foi possível criar um novo grupo");
        console.log(error);
      }
    }
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
