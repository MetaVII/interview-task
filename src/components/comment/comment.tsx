import React from 'react';
import type { TComment } from 'types';

import styles from './comment.module.css';

type TProps = Omit<TComment, 'comments'>;

function Comment({ author, message }: TProps) {
  return (
    <div key={author + message} className={styles.container}>
      <span className={styles.author}>{author}</span>
      <p className={styles.message}>{message}</p>
    </div>
  );
}

export default Comment;
