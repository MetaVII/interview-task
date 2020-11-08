import React from 'react';

import styles from './author.module.css';

type TProps = {
  author: string;
};

function Author({ author }: TProps) {
  return (
    <button
      type="button"
      className={styles.container}
      data-author={author}
      key={author}
    >
      {author}
    </button>
  );
}

export default Author;
