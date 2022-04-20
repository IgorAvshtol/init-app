import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IArticle, IArticlesState, IGetArticles, TypeLoadingStatus } from 'interfaces';
import {
  addArticle,
  deleteArticle,
  getArticles,
  getCurrentArticle,
  updateArticle,
} from './articlesThunk';

const initialState: IArticlesState = {
  articles: [],
  currentArticle: null,
  articlesCount: 0,
  loading: TypeLoadingStatus.IS_RESOLVED,
  error: '',
};

export const articleReducer = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getArticles.pending, (state) => {
        state.loading = TypeLoadingStatus.IS_PENDING;
      })
      .addCase(getArticles.fulfilled, (state, action: PayloadAction<IGetArticles>) => {
        state.articles = action.payload.articles;
        state.articlesCount = action.payload.articlesCount;
        state.loading = TypeLoadingStatus.IS_RESOLVED;
      })
      .addCase(getArticles.rejected, (state) => {
        state.loading = TypeLoadingStatus.IS_REJECTED;
      })
      .addCase(getCurrentArticle.pending, (state) => {
        state.loading = TypeLoadingStatus.IS_PENDING;
      })
      .addCase(getCurrentArticle.fulfilled, (state, action: PayloadAction<IArticle>) => {
        state.currentArticle = action.payload;
        state.loading = TypeLoadingStatus.IS_RESOLVED;
      })
      .addCase(getCurrentArticle.rejected, (state) => {
        state.loading = TypeLoadingStatus.IS_REJECTED;
      })
      .addCase(addArticle.pending, (state) => {
        state.loading = TypeLoadingStatus.IS_PENDING;
      })
      .addCase(addArticle.fulfilled, (state, action: PayloadAction<IArticle>) => {
        state.articles.push(action.payload);
        state.loading = TypeLoadingStatus.IS_RESOLVED;
        state.error = '';
      })
      .addCase(addArticle.rejected.type, (state, action: PayloadAction<string>) => {
        state.loading = TypeLoadingStatus.IS_REJECTED;
        state.error = action.payload;
      })
      .addCase(updateArticle.pending, (state) => {
        state.loading = TypeLoadingStatus.IS_PENDING;
      })
      .addCase(updateArticle.fulfilled, (state, action: PayloadAction<IArticle>) => {
        state.articles = state.articles.map((article) => {
          if (article.slug === action.payload.slug) {
            return action.payload;
          }
          return article;
        });
        state.loading = TypeLoadingStatus.IS_RESOLVED;
      })
      .addCase(updateArticle.rejected, (state) => {
        state.loading = TypeLoadingStatus.IS_REJECTED;
      })
      .addCase(deleteArticle.fulfilled, (state, action: PayloadAction<string>) => {
        state.articles = state.articles.filter((article) => article.slug !== action.payload);
      });
  },
});
