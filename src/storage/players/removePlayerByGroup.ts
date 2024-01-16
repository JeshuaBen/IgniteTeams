import AsyncStorage from "@react-native-async-storage/async-storage";
import { playerGetByGroup } from "./playersGetByGroup";
import { PLAYER_COLLECTION } from "@storage/storageConfig";

const removePlayerByGroup = async (playerName: string, group: string) => {
  try {
    const storage = await playerGetByGroup(group);

    const filteredPlayers = storage.filter(
      (player) => player.name !== playerName
    );
    const players = JSON.stringify(filteredPlayers);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, players);
  } catch (error) {
    throw error;
  }
};

export default removePlayerByGroup;
