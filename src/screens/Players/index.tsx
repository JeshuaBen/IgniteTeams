import { useEffect, useState, useRef } from "react";
import { Alert, FlatList, TextInput } from "react-native";
import * as S from "./styles";

import { useNavigation, useRoute } from "@react-navigation/native";
import { AppError } from "@utils/AppError";

import Filter from "@components/Filter";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import IconButton from "@components/IconButton";
import Input from "@components/Input";
import PlayersCard from "@components/PlayersCard";
import ListEmpty from "@components/ListEmpty";
import Button from "@components/Button";

import { PlayerRouteParams } from "./types";

import playerAddByGroup from "@storage/players/playerAddByGroup";
import playerGetByGroupAndTeam from "@storage/players/playerGetByGroupAndTeam";
import { PlayerStorageDTO } from "@storage/players/PlayerStorageDTO";
import removePlayerByGroup from "@storage/players/removePlayerByGroup";
import removeGroupByName from "@storage/group/removeGroupByName";

const Players = () => {
  const [newPlayerName, setNewPlayerName] = useState<string>("");
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

  const route = useRoute();
  const navigation = useNavigation();
  const { group } = route.params as PlayerRouteParams;

  // useRef -> anotar a referência do elemento, e acessá-lo na árvore de elementos sem ter que gerar uma nova renderização.

  const newPlayerNameInputRef = useRef<TextInput>(null);

  const handleAddPlayer = async () => {
    // .trim() removes blank spaces

    if (newPlayerName.trim().length === 0) {
      return Alert.alert(
        "Nova Pessoa",
        "Informe o nome da pessoa para adicionar."
      );
    }

    const newPlayer = {
      name: newPlayerName,
      team,
    };

    try {
      await playerAddByGroup(newPlayer, group);

      newPlayerNameInputRef.current?.blur();
      setNewPlayerName("");
      fetchPlayerByTeam();
    } catch (error) {
      if (error instanceof AppError) {
        return Alert.alert("Nova Pessoa", error.message);
      } else {
        console.log(error);
        Alert.alert(
          "Nova Pessoa",
          "Não foi possível adicionar um novo jogador"
        );
      }
    }
  };

  const fetchPlayerByTeam = async () => {
    try {
      const playersByTeam = await playerGetByGroupAndTeam(group, team);
      setPlayers(playersByTeam);
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Pessoas",
        "Não foi possível carregar as pessoas do time selecionado"
      );
    }
  };

  const handleRemovePlayer = async (playerName: string) => {
    try {
      await removePlayerByGroup(playerName, group);

      fetchPlayerByTeam();
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Remover Jogador",
        `Ocorreu um erro ao tentar remover ${playerName}`
      );
    }
  };

  const removeGroup = async () => {
    try {
      await removeGroupByName(group);
      navigation.navigate("groups");
    } catch (error) {
      console.log(error);
      Alert.alert("Remover Grupo", "Ocorreu um erro ao tentar remover o grupo");
    }
  };

  const handleRemoveGroup = async () => {
    Alert.alert("Remover Grupo", "Deseja realmente fazer a remoção do grupo?", [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => removeGroup(),
      },
    ]);
  };

  useEffect(() => {
    fetchPlayerByTeam();
  }, [team]);
  return (
    <S.Container>
      <Header showBackButton />

      <Highlight title={group} subtitle="Adicione a galera e separe os times" />

      <S.Form>
        <Input
          // Setando o value para o nosso input, nós transformamos ele em um input controlado. Fazendo assim com que seja possível a gente limpar o valor dele após a adição de player setando apenas o estado para vazio após a adição.
          inputRef={newPlayerNameInputRef}
          onChangeText={setNewPlayerName}
          value={newPlayerName}
          placeholder="Nome da pessoa"
          autoCorrect={false}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />
        <IconButton iconName="add" onPress={handleAddPlayer} />
      </S.Form>

      <S.HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
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
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PlayersCard
            playerName={item.name}
            onRemovePlayer={() => handleRemovePlayer(item.name)}
          />
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

      <Button
        title="Remover Turma"
        type="SECONDARY"
        onPress={handleRemoveGroup}
      />
    </S.Container>
  );
};

export default Players;
