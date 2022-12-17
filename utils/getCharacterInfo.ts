import { futuramaApi } from '../api';
import { FuturamaList } from '../interfaces/futurama-list';

export const getCharacterInfo = async(id: string) => {

  try {

    const {data} = await futuramaApi.get<FuturamaList>(`/characters/${id}`);
    return data;

  } catch(error) {
    return null;
  }
}