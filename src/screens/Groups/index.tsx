import { useState } from "react";
import * as S from "./styles";
import { FlatList } from "react-native";
import { Highlight } from "@components/Highlight";
import { Header } from "@components/Header";
import { GroupCard } from "@components/GroupCard";
import ListEmpty from "@components/ListEmpty";
import Button from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { getAllGroups } from "@storage/group/getAllGroups";

export const Groups: React.FC = () => {
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  const handleCreateNewGroup = () => {
    navigation.navigate("newGroup");
  };

  const getGroups = async () => {
    try {
      await getAllGroups();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />

      <Button title="Criar nova turma" onPress={handleCreateNewGroup} />
    </S.Container>
  );
};
