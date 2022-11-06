// /* eslint-disable @typescript-eslint/ban-ts-comment */
// // @ts-nocheck
import { RickAndMortyApiResponce } from 'models/ApiResources';
import React, { useEffect, useState } from 'react';
import RickAndMortyCard from 'components/RickAndMortyCard';
import styles from './homepage.module.scss';
import Pagination from 'react-bootstrap/esm/Pagination';
import { usePagination } from 'hooks/usePagination';
import SearchBar from 'components/SearchBar';
import { useFetchAllCharacter } from 'hooks/useFetchAllCharacter';
import PaginationContainer from 'components/PaginationContainer';
import { RickAndMortyApi } from 'services/api';
import RickAndMortyLoading from 'components/RickAndMortyLoading';
const HomePage = () => {
  const { setMaxPage, moveToFirstPage, moveToLastPage, nextPage, page, prevPage } = usePagination();
  const { data, errorMsg, getData, isLoading } = useFetchAllCharacter(setMaxPage);
  useEffect(() => {
    getData(page || 1);
  }, [page]);

  return (
    <>
      <SearchBar />
      <div className={styles.container}>
        {data?.map((item) => (
          <RickAndMortyCard data={item} key={item.id} />
        ))}
      </div>
      {errorMsg && <h2>{errorMsg}</h2>}
      {isLoading && <RickAndMortyLoading />}
      <PaginationContainer {...{ moveToFirstPage, moveToLastPage, page, nextPage, prevPage }} />
    </>
  );
};

export default HomePage;
