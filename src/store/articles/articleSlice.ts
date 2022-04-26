import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

import {
  IArticle,
  IArticleData,
  IArticlesState,
  IGetArticles,
  TypeLoadingStatus,
} from 'interfaces';
import {
  addArticle,
  deleteArticle,
  hasDislike,
  getArticles,
  getCurrentArticle,
  getFavoriteArticles,
  hasLike,
  updateArticle,
} from './articlesThunk';

const initialState: IArticlesState = {
  articles: [],
  favoriteArticles: {
    articles: [],
    articlesCount: 0,
  },
  currentArticle: null,
  articlesCount: 0,
  loading: TypeLoadingStatus.IS_RESOLVED,
  error: '',
  isSuccess: false,
};

export const articleReducer = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    closeModal: (state) => {
      state.error = '';
      state.loading = TypeLoadingStatus.IS_RESOLVED;
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getArticles.pending, (state) => {
        state.loading = TypeLoadingStatus.IS_PENDING;
      })
      .addCase(
        getArticles.fulfilled.type,
        (state, action: PayloadAction<AxiosResponse<IGetArticles>>) => {
          state.articles = action.payload.data.articles;
          state.articlesCount = action.payload.data.articlesCount;
          state.loading = TypeLoadingStatus.IS_RESOLVED;
        }
      )
      .addCase(getArticles.rejected, (state) => {
        state.loading = TypeLoadingStatus.IS_REJECTED;
      })
      .addCase(getFavoriteArticles.pending, (state) => {
        state.loading = TypeLoadingStatus.IS_PENDING;
      })
      .addCase(
        getFavoriteArticles.fulfilled.type,
        (state, action: PayloadAction<AxiosResponse<IGetArticles>>) => {
          state.favoriteArticles.articles = action.payload.data.articles;
          state.favoriteArticles.articlesCount = action.payload.data.articlesCount;
          state.loading = TypeLoadingStatus.IS_RESOLVED;
        }
      )
      .addCase(getFavoriteArticles.rejected, (state) => {
        state.loading = TypeLoadingStatus.IS_REJECTED;
      })
      .addCase(getCurrentArticle.pending, (state) => {
        state.loading = TypeLoadingStatus.IS_PENDING;
      })
      .addCase(
        getCurrentArticle.fulfilled.type,
        (state, action: PayloadAction<AxiosResponse<IArticleData>>) => {
          state.currentArticle = action.payload.data.article;
          state.loading = TypeLoadingStatus.IS_RESOLVED;
        }
      )
      .addCase(getCurrentArticle.rejected, (state) => {
        state.loading = TypeLoadingStatus.IS_REJECTED;
      })
      .addCase(addArticle.pending, (state) => {
        state.loading = TypeLoadingStatus.IS_PENDING;
      })
      .addCase(
        addArticle.fulfilled.type,
        (state, action: PayloadAction<AxiosResponse<IArticle>>) => {
          state.articles.push(action.payload.data);
          state.loading = TypeLoadingStatus.IS_RESOLVED;
          state.error = '';
          state.isSuccess = true;
        }
      )
      .addCase(addArticle.rejected.type, (state, action: PayloadAction<string>) => {
        state.loading = TypeLoadingStatus.IS_REJECTED;
        state.error = action.payload;
        state.isSuccess = false;
      })
      .addCase(updateArticle.pending, (state) => {
        state.loading = TypeLoadingStatus.IS_PENDING;
      })
      .addCase(
        updateArticle.fulfilled.type,
        (state, action: PayloadAction<AxiosResponse<IArticle>>) => {
          state.articles = state.articles.map((article) => {
            if (article.slug === action.payload.data.slug) {
              return action.payload.data;
            }
            return article;
          });
          state.loading = TypeLoadingStatus.IS_RESOLVED;
          state.isSuccess = true;
        }
      )
      .addCase(updateArticle.rejected.type, (state, action: PayloadAction<string>) => {
        state.loading = TypeLoadingStatus.IS_REJECTED;
        state.error = action.payload;
        state.isSuccess = false;
      })
      .addCase(deleteArticle.fulfilled, (state, action: PayloadAction<string>) => {
        state.articles = state.articles.filter((article) => article.slug !== action.payload);
        state.isSuccess = true;
      })
      .addCase(
        hasLike.fulfilled.type,
        (state, action: PayloadAction<AxiosResponse<IArticleData>>) => {
          state.articles = state.articles.map((article) => {
            if (article.slug === action.payload.data.article.slug) {
              return {
                ...article,
                favoritesCount: article.favoritesCount + 1,
                favorited: true,
              };
            }
            return article;
          });
          state.favoriteArticles.articles.push(action.payload.data.article);
          state.favoriteArticles.articlesCount = state.favoriteArticles.articlesCount + 1;
          state.currentArticle = action.payload.data.article;
          state.loading = TypeLoadingStatus.IS_RESOLVED;
          state.isSuccess = true;
        }
      )
      .addCase(
        hasDislike.fulfilled.type,
        (state, action: PayloadAction<AxiosResponse<IArticleData>>) => {
          state.articles = state.articles.map((article) => {
            if (article.slug === action.payload.data.article.slug) {
              return {
                ...article,
                favoritesCount: article.favoritesCount - 1,
                favorited: false,
              };
            }
            return article;
          });
          state.favoriteArticles.articles = state.favoriteArticles.articles.filter(
            (article) => article.slug !== action.payload.data.article.slug
          );
          state.favoriteArticles.articlesCount = state.favoriteArticles.articlesCount - 1;
          state.currentArticle = action.payload.data.article;
          state.loading = TypeLoadingStatus.IS_RESOLVED;
          state.isSuccess = true;
        }
      );
  },
});

export const { closeModal } = articleReducer.actions;
