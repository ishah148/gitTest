import React from 'react';
import Pagination from 'react-bootstrap/esm/Pagination';
type Props = {
  moveToFirstPage: () => void;
  prevPage: () => void;
  nextPage: () => void;
  moveToLastPage: () => void;
  page: number;
};
const PaginationContainer = ({
  moveToFirstPage,
  moveToLastPage,
  nextPage,
  prevPage,
  page,
}: Props) => {
  return (
    <>
      <Pagination style={{ justifyContent: 'center', margin: '2rem' }}>
        <Pagination.First onClick={moveToFirstPage} />
        <Pagination.Prev onClick={prevPage} />
        <Pagination.Item>{page}</Pagination.Item>

        <Pagination.Next onClick={nextPage} />
        <Pagination.Last onClick={moveToLastPage} />
      </Pagination>
    </>
  );
};

export default PaginationContainer;
