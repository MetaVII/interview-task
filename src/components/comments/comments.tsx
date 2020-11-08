import React, { useState, useEffect } from 'react';
import { comments as commentsData } from 'consts/data';
import Comment from 'components/comment/comment';

import type { TComments } from 'types';

import styles from './comments.module.css';

function getThreads(comments: TComments) {
  if (comments.length === 0) {
    return null;
  }
  return (
    <div className={styles.thread}>
      {comments.map((comment) => {
        const { author, message } = comment;
        return (
          <div key={author + message}>
            <Comment author={author} message={message} />
            {getThreads(comment.comments)}
          </div>
        );
      })}
    </div>
  );
}

function Comments() {
  const [comments, setComments] = useState([] as TComments);

  useEffect(() => {
    setComments(commentsData);
  }, []);

  return getThreads(comments);
}

export default Comments;
