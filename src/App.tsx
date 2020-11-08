import React, { useState, MouseEvent } from 'react';
import Authors from 'components/authors/authors';
import Comments from 'components/comments/comments';

import './App.css';

function App() {
  const [activeAuthor, setActiveAuthor] = useState('');

  function authorClickHandler(e: MouseEvent<HTMLDivElement>) {
    const target = e.target as HTMLElement;
    const { author } = target.dataset;
    if (!author) {
      return;
    }
    setActiveAuthor(author || '');
  }

  return (
    <div className="App">
      <Authors
        activeAuthor={activeAuthor}
        onClickHandler={authorClickHandler}
      />
      <Comments activeAuthor={activeAuthor} />
    </div>
  );
}

export default App;
