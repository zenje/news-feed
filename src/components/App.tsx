import React from 'react';
import { NAV, TITLE } from '../constants';
import './App.css';
import AppContainer from './AppContainer';
import FeedNav from './FeedNav';
import NewsFeed from './NewsFeed';

const App = () => {
  return (
    <AppContainer>
      <header className="header">
        <h1>{TITLE}</h1>
      </header>
      <nav>
        <FeedNav activeKey={NAV.POPULAR.eventKey} />
      </nav>
      <main>
        <NewsFeed />
      </main>
      <footer></footer>
    </AppContainer>
  );
};

export default App;
