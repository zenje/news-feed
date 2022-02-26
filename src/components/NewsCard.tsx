import { formatInTimeZone } from 'date-fns-tz';
import React from 'react';
import Card from 'react-bootstrap/Card';
import { NewsItem } from '../types';
import './NewsCard.css';

const TODAY = new Date();

const isToday = (date: Date) => {
  return (
    date.getDate() === TODAY.getDate() &&
    date.getMonth() === TODAY.getMonth() &&
    date.getFullYear() === TODAY.getFullYear()
  );
};

const getDisplayDate = (isoDate: string) => {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const date: Date = new Date(isoDate);
  return formatInTimeZone(
    date,
    timeZone,
    isToday(date) ? 'h:MM a zzz' : 'MMMM d, YYYY h:MM a zzz'
  );
};

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
          <Card.Link href={url} target="_blank">
            <Card.Img
              variant="top"
              src={urlToImage}
              className="news-card-img"
            />
          </Card.Link>
        )}
        <Card.Link href={url} target="_blank" className="news-card-title">
          <Card.Title>{title}</Card.Title>
        </Card.Link>
        <Card.Text>{description}</Card.Text>
        {author && <Card.Subtitle className="mb-2">{author}</Card.Subtitle>}
        {publishedAt && (
          <Card.Subtitle className="mb-2 text-muted news-card-date">
            {getDisplayDate(publishedAt)}
          </Card.Subtitle>
        )}
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
