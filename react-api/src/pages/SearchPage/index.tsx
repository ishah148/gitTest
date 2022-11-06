import PaginationContainer from 'components/PaginationContainer';
import RickAndMortyCard from 'components/RickAndMortyCard';
import RickAndMortyLoading from 'components/RickAndMortyLoading';
import SearchBar from 'components/SearchBar';
import { useFetchFilteredCharacters } from 'hooks/useFetchFilteredCharacters';
import { usePagination } from 'hooks/usePagination';
import React, { useEffect } from 'react';
import { useSearchParams, useNavigate, createSearchParams } from 'react-router-dom';
import styles from './searchpage.module.scss';
const SearchPage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { moveToFirstPage, moveToLastPage, nextPage, page, prevPage, setMaxPage } = usePagination();
  const { data, errorMsg, getData, isLoading } = useFetchFilteredCharacters(setMaxPage);

  useEffect(() => {
    getData(page);
  }, [searchParams, page]);
  return (
    <>
      <SearchBar />
      <h2>{errorMsg}</h2>
      <div className={styles.container}>
        {data?.map((item) => (
          <RickAndMortyCard data={item} key={item.id} />
        ))}
      </div>
      {isLoading && <RickAndMortyLoading />}
      <PaginationContainer {...{ moveToFirstPage, moveToLastPage, page, nextPage, prevPage }} />
    </>
  );
};

export default SearchPage;
