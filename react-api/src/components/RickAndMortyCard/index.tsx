import { RickAndMortyApiItem } from 'models/ApiResources';
import styles from './style.module.scss';
import React from 'react';
import Card from 'react-bootstrap/esm/Card';
import Button from 'react-bootstrap/esm/Button';
type Props = {
  data: RickAndMortyApiItem;
};
const RickAndMortyCard = ({ data }: Props) => {
  return (
    <>
      <Card className={styles.item} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={data.image} />
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>{data.gender}</Card.Text>
          <Button variant="primary">Show description</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default RickAndMortyCard;
