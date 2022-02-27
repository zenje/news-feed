import React, { useState } from 'react';
import { NAV, NAVIGATION_ITEM, TITLE } from '../constants';
import './App.css';
import AppContainer from './AppContainer';
import FeedNav from './FeedNav';
import NewsFeed from './NewsFeed';

const App = () => {
  const [activeNavItem, setActiveNavItem] = useState<NAVIGATION_ITEM>(
    NAV.POPULAR
  );

  return (
    <AppContainer>
      <header className="header">
        <h1>{TITLE}</h1>
      </header>
      <nav>
        <FeedNav activeKey={activeNavItem.eventKey} />
      </nav>
      <main>
        {activeNavItem.fetchUrlFn && (
          <NewsFeed fetchUrlFn={activeNavItem.fetchUrlFn} />
        )}
      </main>
      <footer />
    </AppContainer>
  );
};

export default App;
