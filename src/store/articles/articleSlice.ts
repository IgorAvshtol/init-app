import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IArticle, IArticlesState, IGetArticles, TypeLoadingStatus } from 'interfaces';
import { getArticles, getCurrentArticle } from './articlesThunk';

const initialState: IArticlesState = {
  articles: null,
  currentArticle: null,
  articlesCount: 0,
  loading: TypeLoadingStatus.IS_RESOLVED,
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
      });
  },
});
