import React, { useEffect, useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import { RESPONSE } from '../mock/mockResponse3';
import { NewsItem } from '../types';
import NewsCard from './NewsCard';
import './NewsFeed.css';
import Pagination from './Pagination';

type Props = {};

const getNewsItems = (
  setNewsItems: (newsItems: NewsItem[]) => void,
  apiKey: string | null,
  page: number = 1
) => {
  // display mock data if API key is not present
  if (apiKey === null) {
    const response = RESPONSE;
    setNewsItems(response.articles);
  } else {
    const url = `https://newsapi.org/v2/top-headlines?language=en&pageSize=10&page=${page}&apiKey=${apiKey}`;
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

const NewsFeed = (props: Props) => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    let apiKey = process.env.REACT_APP_API_KEY || null;
    getNewsItems(setNewsItems, apiKey, page);
  }, [page]);

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
