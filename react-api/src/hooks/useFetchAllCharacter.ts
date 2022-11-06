import { RickAndMortyApiResponce } from 'models/ApiResources';
import { useState } from 'react';
import { AxiosError } from 'axios';
import { RickAndMortyApi } from 'services/api';

export function useFetchAllCharacter(
  setMaxPage: React.Dispatch<React.SetStateAction<number | undefined>>
) {
  const [data, setData] = useState<RickAndMortyApiResponce['results']>();
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const getData = async (page?: number) => {
    setIsLoading(true);
    setData([]);
    const res = await RickAndMortyApi.getAllCharacters(page || 1);
    setIsLoading(false);
    if (res.responce instanceof AxiosError) {
      setErrorMsg(res.responce.message);
      return;
    }
    if (res.status === 200) {
      setData(res.data.results);
      setMaxPage(Math.ceil(res.data.info.count / 20));
    }
  };
  return {
    data,
    errorMsg,
    getData,
    isLoading,
  };
}
