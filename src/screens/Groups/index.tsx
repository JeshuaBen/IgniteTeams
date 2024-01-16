import { useEffect, useState, useCallback } from "react";
import * as S from "./styles";
import { FlatList } from "react-native";
import { Highlight } from "@components/Highlight";
import { Header } from "@components/Header";
import { GroupCard } from "@components/GroupCard";
import ListEmpty from "@components/ListEmpty";
import Button from "@components/Button";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { getAllGroups } from "@storage/group/getAllGroups";
import { Alert } from "react-native";
import { Loading } from "@components/Loading";

export const Groups: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  const handleCreateNewGroup = () => {
    navigation.navigate("newGroup");
  };

  const fetchGroups = async () => {
    try {
      setIsLoading(true);
      const data = await getAllGroups();
      setGroups(data);
    } catch (error) {
      console.log(error);
      Alert.alert("Turmas", "Não foi possível listar as turmas");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenGroup = (group: string) => {
    navigation.navigate("players", { group });
  };

  // useFocusEffect ele vai ser executado novamente toda vez que o foco voltar para ele. De forma a naveguei para a página novamente,
  // quero executar o que tem dentro do useFocusEffect. É recomendado sempre utilizar ele com useCallback para evitar re-render.

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <S.Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
          )}
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
          ListEmptyComponent={() => (
            <ListEmpty message="Que tal cadastrar a primeira turma?" />
          )}
        />
      )}

      <Button title="Criar nova turma" onPress={handleCreateNewGroup} />
    </S.Container>
  );
};
