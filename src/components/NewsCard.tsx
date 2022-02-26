import React from 'react';
import Card from 'react-bootstrap/Card';
import { NewsItem } from '../types';
import './NewsCard.css';

const NewsCard = ({
  author,
  title,
  description,
  url,
  urlToImage,
  publishedAt,
  content,
}: NewsItem) => {
  return (
    <Card className="news-card">
      <Card.Body className="news-card-body">
        {urlToImage && (
          <Card.Link href={url}>
            <Card.Img
              variant="top"
              src={urlToImage}
              className="news-card-img"
            />
          </Card.Link>
        )}
        <Card.Link href={url} className="news-card-title">
          <Card.Title>{title}</Card.Title>
        </Card.Link>
        <Card.Text>{description}</Card.Text>
        {author && (
          <Card.Subtitle className="mb-2">{author}</Card.Subtitle>
        )}
        <Card.Subtitle className="mb-2 text-muted">{publishedAt}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
