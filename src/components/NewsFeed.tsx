import React, { useEffect, useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import { RESPONSE } from '../mock/mockResponse3';
import { NewsItem } from '../types';
import NewsCard from './NewsCard';
import Pagination from './Pagination';

type Props = {
  fetchUrlFn: (...args: any[]) => string;
};

const getNewsItems = (
  fetchUrlFn: (...args: any[]) => string,
  setNewsItems: (newsItems: NewsItem[]) => void,
  apiKey: string | null,
  page: number = 1
) => {
  // display mock data if API key is not present
  if (apiKey === null) {
    const response = RESPONSE;
    setNewsItems(response.articles);
  } else {
    const url = fetchUrlFn(page, apiKey);
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.articles) {
          setNewsItems(data.articles);
        } else {
          throw new Error('No news articles found in response.');
        }
      })
      .catch((error) => {
        if (typeof error.json === 'function') {
          error.json().then((jsonError: any) => {
            console.log(jsonError);
          });
        } else {
          console.log(error);
        }
      });
  }
};

const NewsFeed = ({ fetchUrlFn }: Props) => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    let apiKey = process.env.REACT_APP_API_KEY || null;
    getNewsItems(fetchUrlFn, setNewsItems, apiKey, page);
  }, [fetchUrlFn, page]);

  return (
    <Stack gap={3}>
      {newsItems.map((newsItem, index) => (
        <NewsCard key={`news-item${index}`} {...newsItem} />
      ))}
      <Pagination
        page={page}
        prevPageFn={() => setPage(page - 1)}
        nextPageFn={() => setPage(page + 1)}
      />
    </Stack>
  );
};

export default NewsFeed;
