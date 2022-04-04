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

interface IAuthor {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}

export enum TypeLoadingStatus {
  IS_PENDING = 'IS_PENDING',
  IS_RESOLVE = 'IS_RESOLVE',
  IS_REJECTED = 'IS_REJECTED',
}
