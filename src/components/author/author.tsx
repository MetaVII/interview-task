import React from 'react';

import styles from './author.module.css';

type TProps = {
  author: string;
  isActive: boolean;
};

function Author({ author, isActive }: TProps) {
  return (
    <button
      type="button"
      className={`${styles.container} ${isActive ? styles.active : ''}`}
      data-author={author}
      key={author}
    >
      {author}
    </button>
  );
}

export default Author;
