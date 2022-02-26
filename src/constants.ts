export const TITLE = 'Explore';

export interface NAVIGATION_ITEM {
  eventKey: string;
  label: string;
  disabled: boolean;
}

interface NAVIGATION {
  [key: string]: NAVIGATION_ITEM;
}

export const NAV: NAVIGATION = {
  POPULAR: {
    eventKey: 'POPULAR',
    label: 'Popular',
    disabled: false,
  },
  LATEST: {
    eventKey: 'LATEST',
    label: 'Latest',
    disabled: true,
  },
};
