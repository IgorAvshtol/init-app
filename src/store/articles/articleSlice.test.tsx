import '@testing-library/jest-dom';

import { IArticlesState, TypeLoadingStatus } from 'interfaces';
import {
  addArticle,
  deleteArticle,
  getArticles,
  getCurrentArticle,
  updateArticle,
} from './articlesThunk';
import { articleReducer } from './articleSlice';

describe('article', () => {
  const initialState: IArticlesState = {
    articles: [],
    currentArticle: null,
    articlesCount: 0,
    loading: TypeLoadingStatus.IS_RESOLVED,
    error: '',
    isSuccess: false,
  };
  const currentArticle = {
    data: {
      article: {
        slug: 'slug',
        title: 'title',
        description: 'description',
        body: 'body',
        tagList: [],
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        favoritesCount: 1,
        author: {
          username: 'username',
          bio: 'bio',
          image: 'image',
          following: false,
        },
      },
    },
  };
  const payloadArticles = {
    data: {
      articles: [
        {
          slug: 'slug',
          title: 'title',
          description: 'description',
          body: 'body',
          tagList: [],
          createdAt: 'createdAt',
          updatedAt: 'updatedAt',
          favoritesCount: 1,
          author: {
            username: 'username',
            bio: 'bio',
            image: 'image',
            following: false,
          },
        },
      ],
      articlesCount: 1,
    },
  };
  const newState = {
    articles: [
      {
        slug: 'slug',
        title: 'title',
        description: 'description',
        body: 'body',
        tagList: [],
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        favoritesCount: 1,
        author: {
          username: 'username',
          bio: 'bio',
          image: 'image',
          following: false,
        },
      },
    ],
    currentArticle: null,
    articlesCount: 0,
    loading: TypeLoadingStatus.IS_RESOLVED,
    error: '',
    isSuccess: false,
  };
  it('getArticles status is pending', () => {
    const action = { type: getArticles.pending };
    const state = articleReducer.reducer(initialState, action);
    expect(state).toEqual({
      articles: [],
      currentArticle: null,
      articlesCount: 0,
      loading: TypeLoadingStatus.IS_PENDING,
      error: '',
      isSuccess: false,
    });
  });
  it('getArticles status is resolve', () => {
    const action = {
      type: getArticles.fulfilled.type,
      payload: payloadArticles,
    };
    const state = articleReducer.reducer(initialState, action);
    expect(state).toEqual({
      articles: [
        {
          slug: 'slug',
          title: 'title',
          description: 'description',
          body: 'body',
          tagList: [],
          createdAt: 'createdAt',
          updatedAt: 'updatedAt',
          favoritesCount: 1,
          author: {
            username: 'username',
            bio: 'bio',
            image: 'image',
            following: false,
          },
        },
      ],
      currentArticle: null,
      articlesCount: 1,
      loading: TypeLoadingStatus.IS_RESOLVED,
      error: '',
      isSuccess: false,
    });
  });
  it('getArticles status is rejected', () => {
    const action = { type: getArticles.rejected };
    const state = articleReducer.reducer(initialState, action);
    expect(state).toEqual({
      articles: [],
      currentArticle: null,
      articlesCount: 0,
      loading: TypeLoadingStatus.IS_REJECTED,
      error: '',
      isSuccess: false,
    });
  });
  it('getCurrentArticle status is pending', () => {
    const action = { type: getCurrentArticle.pending };
    const state = articleReducer.reducer(initialState, action);
    expect(state).toEqual({
      articles: [],
      currentArticle: null,
      articlesCount: 0,
      loading: TypeLoadingStatus.IS_PENDING,
      error: '',
      isSuccess: false,
    });
  });
  it('getCurrentArticle status is resolve', () => {
    const action = {
      type: getCurrentArticle.fulfilled.type,
      payload: currentArticle,
    };
    const state = articleReducer.reducer(initialState, action);
    expect(state).toEqual({
      articles: [],
      currentArticle: currentArticle.data.article,
      articlesCount: 0,
      loading: TypeLoadingStatus.IS_RESOLVED,
      error: '',
      isSuccess: false,
    });
  });
  it('getCurrentArticle status is rejected', () => {
    const action = { type: getCurrentArticle.rejected };
    const state = articleReducer.reducer(initialState, action);
    expect(state).toEqual({
      articles: [],
      currentArticle: null,
      articlesCount: 0,
      loading: TypeLoadingStatus.IS_REJECTED,
      error: '',
      isSuccess: false,
    });
  });
  it('addArticle status is pending', () => {
    const action = { type: addArticle.pending };
    const state = articleReducer.reducer(initialState, action);
    expect(state).toEqual({
      articles: [],
      currentArticle: null,
      articlesCount: 0,
      loading: TypeLoadingStatus.IS_PENDING,
      error: '',
      isSuccess: false,
    });
  });
  it('addArticle status is resolve', () => {
    const action = {
      type: addArticle.fulfilled.type,
      payload: currentArticle,
    };
    const state = articleReducer.reducer(initialState, action);
    expect(state).toEqual({
      articles: [currentArticle.data],
      currentArticle: null,
      articlesCount: 0,
      loading: TypeLoadingStatus.IS_RESOLVED,
      error: '',
      isSuccess: true,
    });
  });
  it('addArticle status is rejected', () => {
    const action = { type: addArticle.rejected, payload: 'Error message' };
    const state = articleReducer.reducer(initialState, action);
    expect(state).toEqual({
      articles: [],
      currentArticle: null,
      articlesCount: 0,
      loading: TypeLoadingStatus.IS_REJECTED,
      error: 'Error message',
      isSuccess: false,
    });
  });
  it('updateArticle status is pending', () => {
    const action = { type: updateArticle.pending };
    const state = articleReducer.reducer(initialState, action);
    expect(state).toEqual({
      articles: [],
      currentArticle: null,
      articlesCount: 0,
      loading: TypeLoadingStatus.IS_PENDING,
      error: '',
      isSuccess: false,
    });
  });
  it('updateArticle status is resolve', () => {
    const action = {
      type: updateArticle.fulfilled.type,
      payload: {
        data: {
          slug: 'slug',
          title: 'title2',
          description: 'description2',
          body: 'body',
          tagList: [],
          createdAt: 'createdAt',
          updatedAt: 'updatedAt',
          favoritesCount: 1,
          author: {
            username: 'username',
            bio: 'bio',
            image: 'image',
            following: false,
          },
        },
      },
    };
    const state = articleReducer.reducer(newState, action);
    expect(state).toEqual({
      articles: [
        {
          slug: 'slug',
          title: 'title2',
          description: 'description2',
          body: 'body',
          tagList: [],
          createdAt: 'createdAt',
          updatedAt: 'updatedAt',
          favoritesCount: 1,
          author: {
            username: 'username',
            bio: 'bio',
            image: 'image',
            following: false,
          },
        },
      ],
      currentArticle: null,
      articlesCount: 0,
      loading: TypeLoadingStatus.IS_RESOLVED,
      error: '',
      isSuccess: true,
    });
  });
  it('updateArticle status is rejected', () => {
    const action = { type: updateArticle.rejected, payload: 'Error message' };
    const state = articleReducer.reducer(initialState, action);
    expect(state).toEqual({
      articles: [],
      currentArticle: null,
      articlesCount: 0,
      loading: TypeLoadingStatus.IS_REJECTED,
      error: 'Error message',
      isSuccess: false,
    });
  });
  it('deleteArticle status is resolve', () => {
    const action = {
      type: deleteArticle.fulfilled.type,
      payload: 'slug',
    };
    const state = articleReducer.reducer(newState, action);
    expect(state).toEqual({
      articles: [],
      currentArticle: null,
      articlesCount: 0,
      loading: TypeLoadingStatus.IS_RESOLVED,
      error: '',
      isSuccess: true,
    });
  });
});
