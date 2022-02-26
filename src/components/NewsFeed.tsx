import React from 'react';
import Stack from 'react-bootstrap/Stack';
import NewsCard from './NewsCard';
import './NewsFeed.css';

type Props = {};

const NewsFeed = (props: Props) => {
  return (
    <Stack gap={3}>
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </Stack>
  );
};

export default NewsFeed;
