import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";

export const getAllGroups = async () => {
  try {
    // Acessando o async storage e pegando o item que está salvo com o nome contido em GROUP_COLLECTION
    const storage = await AsyncStorage.getItem(GROUP_COLLECTION);
    // Como as informações voltam do storage em forma de string, precisamos converter para um objeto
    const groups: string[] = storage ? JSON.parse(storage) : [];

    return groups;
  } catch (error) {
    throw error;
  }
};
