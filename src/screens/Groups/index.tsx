import { useState } from "react";
import { FlatList } from "react-native";
import { Highlight } from "@components/Highlight";
import * as S from "./styles";
import { Header } from "@components/Header";
import { GroupCard } from "@components/GroupCard";

export const Groups: React.FC = () => {
  const [groups, setGroups] = useState<string[]>(["Galera do Ignite"]);

  return (
    <S.Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
      />
    </S.Container>
  );
};
