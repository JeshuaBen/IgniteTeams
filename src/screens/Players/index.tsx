import Filter from "@components/Filter";
import * as S from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import IconButton from "@components/IconButton";
import Input from "@components/Input";
import { FlatList } from "react-native";
import { useState } from "react";
import PlayersCard from "@components/PlayersCard";
import ListEmpty from "@components/ListEmpty";
import Button from "@components/Button";

const Players = () => {
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState([]);

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

      <S.HeaderList>
        <FlatList
          data={["Time A", "Time B", "Time C"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isFilterActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <S.AmountOfPlayers>{players.length}</S.AmountOfPlayers>
      </S.HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayersCard playerName={item} onRemovePlayer={() => {}} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />

      <Button title="Remover Turma" type="SECONDARY" />
    </S.Container>
  );
};

export default Players;
