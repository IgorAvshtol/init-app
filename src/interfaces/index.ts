export interface IArticle {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  note?: string;
  author: IAuthor;
}

export interface IRegisterData {
  name?: string;
  email: string;
  password: string;
}

export interface IAuthor {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}

export interface ITags {
  tags: string[];
}

export interface IComment {
  id: number;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: IAuthor;
}

export interface IAuthState {
  user: IUser | null;
  loading: TypeLoadingStatus;
  error: string;
  signInModalOpen: boolean;
  signUpModalOpen: boolean;
}

export interface IProfileState {
  profile: IAuthor;
  loading: TypeLoadingStatus;
}

export interface IProfileData {
  profile: IAuthor;
}

export interface IUserData {
  user: IUser;
}

export interface IArticleData {
  article: IArticle;
}

export interface IUser {
  email: string;
  bio: string;
  image: string;
  token: string;
  username: string;
}

export interface IGetCurrentUser {
  user: IUser | null;
}

export interface IGetArticles {
  articles: IArticle[];
  articlesCount: number;
}

export interface INewArticle {
  title: string;
  description: string;
  body: string;
  tagList: string[];
}

export interface IUpdateArticle {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
}

export interface IArticlesState {
  articles: IArticle[];
  currentUserArticles: IArticle[];
  articlesByTag: IArticle[];
  favoriteArticles: IGetArticles;
  currentArticle: IArticle | null;
  articlesCount: number;
  loading: TypeLoadingStatus;
  error: string;
  isSuccess: boolean;
}

export interface IGetComments {
  comments: IComment[];
}

export interface ICreateComment {
  slug: string | undefined;
  comment: string;
}

export interface IDeleteComment {
  slug: string;
  id: number;
}

export interface ICommentsState {
  comments: IComment[];
  loading: TypeLoadingStatus;
  error: string;
}

export interface ITagsState {
  tags: string[];
  selectedTag: string;
  loading: TypeLoadingStatus;
  error: string;
}

export interface ITabsState {
  selectedTab: number;
}

export interface ITabs {
  label: string;
  index: number;
}

export type IUpdateUserData = {
  [key: string]: string | File;
};

export interface IAddNote {
  slug: string;
  noteText: string;
}

export enum TypeLoadingStatus {
  IS_PENDING = 'IS_PENDING',
  IS_RESOLVED = 'IS_RESOLVED',
  IS_REJECTED = 'IS_REJECTED',
}
