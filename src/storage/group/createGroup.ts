import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { getAllGroups } from "./getAllGroups";
import { AppError } from "@utils/AppError";

export const createGroup = async (newGroup: string) => {
  // Como a função é async, é sempre bom encapsular em um tryCatch

  try {
    // Pegando a info do array de grupos que estão alocados no storage do cel
    const storedGroups = await getAllGroups();

    const groupAlreadyExists = storedGroups.includes(newGroup);

    if (groupAlreadyExists) {
      throw new AppError("Já existe um grupo cadastrado com esse nome");
    }

    // Transformando em string para poder ser setado para o AsyncStorage
    const storage = JSON.stringify([...storedGroups, newGroup]);

    // Salvando o novo grupo no AsyncStorage
    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
};
