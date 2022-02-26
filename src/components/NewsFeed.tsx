import React, { useEffect, useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import { RESPONSE } from '../mock/mockResponse2';
import { NewsItem } from '../types';
import NewsCard from './NewsCard';
import './NewsFeed.css';

type Props = {};

const NewsFeed = (props: Props) => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  useEffect(() => {
    const response = RESPONSE;
    setNewsItems(response.articles);
  }, []);

  return (
    <Stack gap={3}>
      {newsItems.map((newsItem) => (
        <NewsCard {...newsItem} />
      ))}
    </Stack>
  );
};

export default NewsFeed;
