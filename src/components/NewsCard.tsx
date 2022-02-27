import { formatInTimeZone } from 'date-fns-tz';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { BiBookmarkHeart as BookmarkIcon } from 'react-icons/bi';
import { MdIosShare as ShareIcon } from 'react-icons/md';
import { NewsItem } from '../types';
import './NewsCard.css';

const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const TODAY = new Date();

const isToday = (date: Date) => {
  return (
    date.getDate() === TODAY.getDate() &&
    date.getMonth() === TODAY.getMonth() &&
    date.getFullYear() === TODAY.getFullYear()
  );
};

const formatDate = (isoDate: string) => {
  if (isoDate) {
    try {
      const date: Date = new Date(isoDate);
      return formatInTimeZone(
        date,
        timeZone,
        isToday(date) ? 'h:MM a zzz' : 'MMMM d, yyyy h:MM a zzz'
      );
    } catch (e) {
      console.log(`Unable to parse date ${isoDate}`, e);
    }
  }
  return null;
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
  const formattedPublishedDate: string | null = formatDate(publishedAt);
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
        <Row>
          <Col sm={9} xs={7}>
            {author && <Card.Subtitle className="mb-2">{author}</Card.Subtitle>}
            {formattedPublishedDate && (
              <Card.Subtitle className="mb-2 text-muted news-card-date">
                {formattedPublishedDate}
              </Card.Subtitle>
            )}
          </Col>
          <Col sm={3} xs={5} className="actions">
            <ShareIcon size="1.5rem" color="grey" />
            <BookmarkIcon size="1.5rem" color="grey" />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
