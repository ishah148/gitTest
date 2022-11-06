import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/esm/Form';

import { useSearchParams, useNavigate, createSearchParams } from 'react-router-dom';
import { ReactComponent as SearchSvg } from '../../assets/svg/search.svg';
import { ReactComponent as TrashSvg } from '../../assets/svg/trash.svg';
import styles from './searchbar.module.scss';
const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState<string>();
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery) {
      searchParams.set('name', searchQuery);
      // searchParams.set('f', searchQuery);
      const params = searchParams.toString();
      // setSearchParams(searchParams, { state: { test: 333 } });
      navigate('/search?' + params);
    }
  };

  return (
    <>
      <Form className={styles.container + ' my-3'} onSubmit={handleSubmit}>
        <Form.Group className="mx-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Seacrh"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Form.Group>

        <Button className="mx-1" variant="primary" type="submit">
          <SearchSvg />
        </Button>
        <Button variant="primary" type="reset">
          <TrashSvg />
        </Button>
      </Form>
    </>
  );
};

export default SearchBar;
