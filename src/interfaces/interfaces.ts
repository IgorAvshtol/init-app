export interface IArticle {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favoritesCount: number;
  author: IAuthor;
}

export interface IAuthor {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}

export interface IArticles {
  articles: IArticle[];
}

export interface ICurrentArticle {
  article: IArticle;
}

export interface ITags {
  tags: string[];
}

export interface IComments {
  comments: IComment[];
}

interface IComment {
  id: number;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: IAuthor;
}

export interface ISendComments {
  comment: IBody;
}

interface IBody {
  body: string;
}

export enum TypeLoadingStatus {
  IS_PENDING = 'IS_PENDING',
  IS_RESOLVE = 'IS_RESOLVE',
  IS_REJECTED = 'IS_REJECTED',
}
