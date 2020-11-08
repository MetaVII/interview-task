import type { TComments } from 'types/index';

export function getUniqAuthors(comments: TComments, result: Set<string>) {
  if (comments.length === 0) {
    return;
  }
  comments.forEach((comment) => {
    result.add(comment.author);
    getUniqAuthors(comment.comments, result);
  });
}

export default {};
