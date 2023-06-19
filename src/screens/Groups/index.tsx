import { useState } from "react";
import { FlatList } from "react-native";
import { Highlight } from "@components/Highlight";
import * as S from "./styles";
import { Header } from "@components/Header";
import { GroupCard } from "@components/GroupCard";
import ListEmpty from "@components/ListEmpty";

export const Groups: React.FC = () => {
  const [groups, setGroups] = useState<string[]>([]);

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
    </S.Container>
  );
};
