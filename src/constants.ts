export const TITLE = 'Explore';

export interface NAVIGATION_ITEM {
  eventKey: string;
  label: string;
  disabled: boolean;
  fetchUrlFn?: (...args: any[]) => string;
}

interface NAVIGATION {
  [key: string]: NAVIGATION_ITEM;
}

export const NAV: NAVIGATION = {
  POPULAR: {
    eventKey: 'POPULAR',
    label: 'Popular',
    disabled: false,
    fetchUrlFn: (page: number, apiKey: string) =>
      `https://newsapi.org/v2/top-headlines?language=en&pageSize=10&page=${page}&apiKey=${apiKey}`,
  },
  LATEST: {
    eventKey: 'LATEST',
    label: 'Latest',
    disabled: true,
    // not yet used; no fetchUrlFn
  },
};
