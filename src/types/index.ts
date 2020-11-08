export type TComment = {
  author: string;
  message: string;
  comments: TComment[];
};

export type TComments = TComment[];
