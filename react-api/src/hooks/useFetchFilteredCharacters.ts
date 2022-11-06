import { RickAndMortyApiFilterQuery, RickAndMortyApiResponce } from 'models/ApiResources';
import { useState } from 'react';
import { AxiosError } from 'axios';
import { RickAndMortyApi } from 'services/api';
import { useSearchParams, useNavigate, createSearchParams } from 'react-router-dom';

export function useFetchFilteredCharacters(
  setMaxPage: React.Dispatch<React.SetStateAction<number | undefined>>
) {
  const [data, setData] = useState<RickAndMortyApiResponce['results']>();
  const [query, setQuery] = useState<RickAndMortyApiFilterQuery>();
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  const getData = async (page?: number) => {
    const query: RickAndMortyApiFilterQuery = {
      name: searchParams.get('name') || '',
      gender: searchParams.get('gender') || '',
      species: searchParams.get('species') || '',
      status: searchParams.get('status') || '',
      type: searchParams.get('type') || '',
    };
    setIsLoading(true);
    setData([]);
    const res = await RickAndMortyApi.getFilteredCharacters(page || 1, { ...query });
    setIsLoading(false);
    if (res.responce instanceof AxiosError) {
      console.log('', res);
      if (res.responce.response?.data?.error) {
        setErrorMsg(res.responce.response?.data?.error);
      } else {
        setErrorMsg(res.responce.message);
      }
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
    setQuery,
    isLoading,
  };
}
