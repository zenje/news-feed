import React from 'react';
import Card from 'react-bootstrap/Card';
import './NewsCard.css';

type Props = {};

const NewsCard = (props: Props) => {
  return (
    <Card className="news-card">
      <Card.Body className="news-card-body">
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. A cras
          semper auctor neque vitae tempus quam pellentesque. Morbi quis commodo
          odio aenean. Ultrices gravida dictum fusce ut. Lectus quam id leo in
          vitae turpis massa sed. Pellentesque id nibh tortor id aliquet. Arcu
          dui vivamus arcu felis bibendum. Enim lobortis scelerisque fermentum
          dui faucibus in ornare quam. Tincidunt vitae semper quis lectus. Ac
          auctor augue mauris augue. Cras fermentum odio eu feugiat. Nisi
          scelerisque eu ultrices vitae.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
