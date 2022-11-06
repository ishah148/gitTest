import { useState } from 'react';

export function usePagination() {
  const [page, setPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>();
  const prevPage = () => {
    if (page > 1) setPage((page) => page - 1);
  };
  const nextPage = () => {
    if (maxPage && page < maxPage) setPage((page) => page + 1);
  };

  const moveToLastPage = () => {
    if (maxPage) {
      setPage(maxPage);
    }
  };

  const moveToFirstPage = () => {
    setPage(1);
  };
  return {
    prevPage,
    nextPage,
    moveToFirstPage,
    moveToLastPage,
    page,
    setPage,
    setMaxPage,
  };
}
