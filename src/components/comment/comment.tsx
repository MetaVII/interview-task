import React from 'react';
import styles from './comment.module.css';

type TProps = {
  author: string;
  message: string;
  isActive: boolean;
};

function Comment({ author, message, isActive }: TProps) {
  return (
    <div
      key={author + message}
      className={`${styles.container} ${isActive ? styles.active : ''}`}
    >
      <span className={styles.author}>{author}</span>
      <p className={styles.message}>{message}</p>
    </div>
  );
}

export default Comment;
