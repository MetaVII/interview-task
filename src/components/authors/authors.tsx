import React, { useState, useEffect } from 'react';
import { getUniqAuthors } from 'helpers';
import { comments } from 'consts/data';
import Author from 'components/author/author';

import styles from './authors.module.css';

function Authors() {
  const [authors, setAuthors] = useState([] as string[]);

  useEffect(() => {
    const uniqAuthors = new Set() as Set<string>;
    getUniqAuthors(comments, uniqAuthors);
    setAuthors(Array.from(uniqAuthors));
  }, []);

  return (
    <div className={styles.container}>
      {authors.map((author) => (
        <Author key={author} author={author} />
      ))}
    </div>
  );
}

export default Authors;
